import { Sequelize } from 'sequelize'
import { Umzug, SequelizeStorage } from 'umzug'
import { DATABASE_URL, inDevelopment } from '../util/config'
import logger from '../util/logger'

const DB_CONNECTION_RETRY_LIMIT = 10

export const sequelize = new Sequelize(DATABASE_URL, { logging: false })

const runMigrations = async () => {
  const migrator = new Umzug({
    migrations: {
      glob: inDevelopment
        ? 'src/db/migrations/*.js'
        : 'build/db/migrations/*.js',
    },
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
  })

  const migrations = await migrator.up()

  logger.info('Migrations up to date', {
    migrations,
  })
}

const testConnection = async () => {
  await sequelize.authenticate()
  await runMigrations()
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const connectToDatabase = async (attempt = 0) => {
  try {
    await testConnection()
  } catch (err) {
    if (attempt === DB_CONNECTION_RETRY_LIMIT) {
      logger.error(`Connection to database failed after ${attempt} attempts`, {
        error: err.stack,
      })

      return
    }
    logger.info(
      `Connection to database failed! Attempt ${attempt} of ${DB_CONNECTION_RETRY_LIMIT}`,
    )
    console.log(err)
    await sleep(5000)

    return connectToDatabase(attempt + 1)
  }

  return null
}
