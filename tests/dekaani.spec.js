import { describe, expect, it } from 'vitest'
import { api } from './util/utils'

describe.concurrent('Dekaani', () => {
  it('gets READ access to faculty and each programme of faculty', async () => {
    const res = await api.post('', {
      userId: 'oikis-dekaani',
      iamGroups: ['hy-oiktdk-dekanaatti'],
    })

    expect(res.status).toBe(200)
    const access = await res.json()

      // expect(access).toHaveProperty('H20') // TODO: dekaani not getting access to faculty

      // These are the programmes that oikis dekaani should have access to
      ;[
        'KH20_001', // oikeustieteellinen
        'MH20_001',
        'MH20_002',
        'MH20_003',
        'T920102',
      ].forEach((programme) => {
        expect(access[programme].read).toBe(true)
        expect(access[programme].write).toBeFalsy()
        expect(access[programme].admin).toBeFalsy()
      })
  })

  it('opetusvaradekaani gets ADMIN access to faculty and each programme of faculty', async () => {
    const res = await api.post('', {
      userId: 'oikis-opetusvaradekaani',
      iamGroups: ['hy-oiktdk-dekanaatti', 'hy-varadekaanit-opetus'],
    })

    expect(res.status).toBe(200)
    const access = await res.json()

      // expect(access).toHaveProperty('H20') // TODO: dekaani not getting access to faculty

      // These are the programmes that oikis dekaani should have access to
      ;[
        'KH20_001', // oikeustieteellinen
        'MH20_001',
        'MH20_002',
        'MH20_003',
        'T920102',
      ].forEach((programme) => {
        expect(access[programme].read).toBe(true)
        expect(access[programme].write).toBe(true)
        expect(access[programme].admin).toBe(true)
      })
  })
})
