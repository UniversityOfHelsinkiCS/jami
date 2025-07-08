import './util/sentry' // This must be imported before anything else
import express from 'express'
import * as Sentry from '@sentry/node'
import { Op } from 'sequelize'

import { PORT, inProduction } from './util/config'
import logger from './util/logger'

import errorHandler from './middleware/errors'
import accessLogger from './middleware/accessLogger'

import {
  relevantIAMs,
  relevantOrganisations,
  iamToFaculty,
  joryMap,
} from './auth/IAMConfig'
import getIAMRights from './auth/IAMRights'
import { hasFullSisuAccess } from './auth/sisuRoles'
import { FACULTIES } from './organisation/faculties'

import { connectToDatabase } from './db/connection'
import User from './db/models/user'
import testRouter from './util/testRouter'
import { processInBatches } from './util/processInBatches'

const app = express()

app.use(express.json())

app.use(accessLogger)

app.get('/ping', (_req, res) => res.send('pong'))

app.post('/', async (req, res) => {
  const { userId, iamGroups = [], getSisuAccess = false } = req.body

  const relevantIamGroups = iamGroups.filter((iam) => relevantIAMs.has(iam))

  const { access, specialGroup } = getIAMRights(relevantIamGroups)

  if (getSisuAccess) {
    specialGroup.fullSisuAccess = await hasFullSisuAccess(userId)
  }

  if (userId && iamGroups) {
    await User.upsert({ id: userId, iamGroups })
  }

  logger.info('IAM authentication', { userId, iamGroups, access })

  return res.send({ ...access, specialGroup })
})

app.get('/access-to-all', (_req, res) => {
  const access = {}

  relevantOrganisations.forEach((org) => {
    access[org] = { read: true, write: true, admin: true }
  })

  const specialGroup = { allProgrammes: true }

  return res.send({ ...access, specialGroup })
})

app.get('/organisation-data', (_req, res) => res.send(FACULTIES))

app.get('/all-access', async (_req, res) => {
  const users = await User.findAll()

  const usersWithAccess = users.map(({ dataValues: user }) => {
    const iamGroups = user.iamGroups.filter((iam) => relevantIAMs.has(iam))

    return {
      ...user,
      iamGroups,
      ...getIAMRights(iamGroups),
    }
  })

  return res.send(usersWithAccess)
})

app.post('/access-and-special-groups', async (req, res) => {
  if (!req?.body?.userIds || !Array.isArray(req.body.userIds)) {
    return res.sendStatus(400)
  }

  const { userIds } = req.body
  const users = await User.findAll({
    attributes: ['id', 'iamGroups'],
    where: {
      id: {
        [Op.in]: userIds,
      },
    },
  })

  const usersWithAccess = await processInBatches(
    users.map(({ dataValues: user }) => user),
    50,
    async (user) => {
      const iamGroups = user.iamGroups.filter((iam) => relevantIAMs.has(iam))
      const { access, specialGroup } = getIAMRights(iamGroups)
      specialGroup.fullSisuAccess = await hasFullSisuAccess(user.id)

      return { ...user, iamGroups, access, specialGroup }
    },
  )

  return res.send(usersWithAccess)
})

app.get('/iam-groups', async (_req, res) => {
  const users = await User.findAll()

  const iamGroups = users.map(({ iamGroups }) => iamGroups).flat()

  const uniqueIamGroups = [...new Set(iamGroups)]

  return res.send(uniqueIamGroups)
})

app.post('/user-organisations', async (req, res) => {
  const { userId, iamGroups = [] } = req.body

  if (userId && iamGroups) {
    await User.upsert({ id: userId, iamGroups })
  }

  const faculties = {}
  iamGroups.forEach((iam) => {
    const faculty = iamToFaculty(iam)
    if (faculty) faculties[faculty.code] = faculty
  })

  return res.send(Object.values(faculties))
})

app.get('/jory-map', async (_req, res) => {
  return res.send(joryMap)
})

app.get('/:id', async (req, res) => {
  const { id } = req.params

  const user = await User.findByPk(id)

  if (!user) return res.sendStatus(404)

  const iamGroups = user.iamGroups.filter((iam) => relevantIAMs.has(iam))

  return res.send({
    ...user.dataValues,
    iamGroups,
  })
})

if (!inProduction) {
  app.use(testRouter)
}

Sentry.setupExpressErrorHandler(app)

app.use(errorHandler)

connectToDatabase()
  .then(() => {
    logger.info('Connected to database')

    const server = app.listen(PORT, () => {
      logger.info(
        `Started on port ${PORT} with environment ${inProduction ? 'production' : 'development'
        }`,
      )
    })

    process.on('SIGTERM', () => {
      server.close(() => {
        logger.info('Server closed')
      })
    })
  })
  .catch((err) => {
    logger.error('Failed to start application', err)
    process.exit(1)
  })
