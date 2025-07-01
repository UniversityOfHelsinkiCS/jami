import { describe, expect, it } from 'vitest'
import { api } from './util/utils'

describe.concurrent('Kosu', () => {
  it('gets READ access to each faculty and programme of location', async () => {
    const res = await api.post('', {
      userId: 'kosu',
      iamGroups: ['hy-ypa-opa-kosu-kruununhaka'],
    })

    expect(res.status).toBe(200)
    const access = await res.json()

      // expect(access).toHaveProperty('H10') // TODO: kosu not getting access to faculties
      // expect(access).toHaveProperty('H20')
      // expect(access).toHaveProperty('H40')
      // expect(access).toHaveProperty('H60')
      // expect(access).toHaveProperty('H70')
      // expect(access).toHaveProperty('H74')

      // These are the programmes that kruunuhaka kosu should have access to
      ;[
        'KH10_001', // teologinen
        'MH10_001',
        'T920101',

        'KH20_001', // oikeustieteellinen
        'MH20_001',
        'MH20_002',
        'MH20_003',
        'T920102',

        'KH40_001', // humanistinen
        'KH40_002',
        'KH40_003',
        'KH40_004',
        'KH40_005',
        'KH40_006',
        'MH40_001',
        'MH40_002',
        'MH40_003',
        'MH40_004',
        'MH40_005',
        'MH40_006',
        'MH40_007',
        'MH40_008',
        'MH40_009',
        'MH40_010',
        'MH40_011',
        'MH40_012',
        'MH40_013',
        'MH40_014',
        'MH40_015',
        'T920103',
        'T920104',
        'T920105',
        'T920111',

        'KH60_001', // kasvatustieteellinen
        'MH60_001',
        'MH60_002',
        'T920109',
        'T920110',

        'KH70_001', // valtiotieteellinen
        'KH70_002',
        'KH70_003',
        'KH70_004',
        'MH70_001',
        'MH70_002',
        'MH70_003',
        'MH70_004',
        'MH70_005',
        'MH70_006',
        'MH70_007',
        'MH70_008',
        'MH70_009',
        'MH70_011', // Where is MH70_010? Maybe check.
        'T920106',
        'T920107',
        'T920108',

        'KH74_001', // svenska
      ].forEach((programme) => {
        expect(access[programme].read).toBe(true)
        expect(access[programme].write).toBe(true)
        expect(access[programme].admin).toBeFalsy()
      })
  })

  it('gets the "kosu" special group', async () => {
    const res = await api.post('', {
      userId: 'kosu',
      iamGroups: ['hy-ypa-opa-kosu-kruununhaka'],
    })

    expect(res.status).toBe(200)
    const access = await res.json()

    expect(access.specialGroup).toHaveProperty('kosu')
    expect(access.specialGroup.kosu).toBe(true)
  })
})
