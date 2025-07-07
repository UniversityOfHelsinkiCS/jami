import { expect, test, beforeAll } from 'vitest'
import { api } from './util/utils'
import { seed } from './util/seed'

beforeAll(async () => {
  await seed()
})

test('Ping', async () => {
  const res = await api.get('ping')
  expect(res.status).toBe(200)
  expect(await res.text()).toBe('pong')
})

test('User with no iam groups gets no access', async () => {
  const res = await api.post('', { userId: 'user-1', iamGroups: [] })

  expect(res.status).toBe(200)
 expect(await res.json()).toEqual({
    specialGroup: {},
  })
})

test('User with employee iam gets employee special group', async () => {
  const res = await api.post('', {
    userId: 'user-1',
    iamGroups: ['hy-employees'],
  })

  expect(res.status).toBe(200)
  expect(await res.json()).toEqual({
    specialGroup: {
      employee: true,
    },
  })
})

test('User without employee iam gets no special groups', async () => {
  const res = await api.post('', { userId: 'user-1', iamGroups: ['hy-pelle'] })

  expect(res.status).toBe(200)
  expect(await res.json()).toEqual({
    specialGroup: {},
  })
})
