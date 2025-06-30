import { describe, expect, it } from 'vitest'
import { api } from './util/utils'

describe.concurrent('Doctoral schools', () => {
  it('Doctoral iam gives access to all doctoral schools & gives "doctoral" special group', async () => {
    ;['hy-tohtorikoulutus-johtoryhma', 'hy-tine'].forEach(async (iam) => {
      const res = await api.post('', {
        userId: 'doctoralschools-user',
        iamGroups: [iam],
      })

      expect(res.status).toBe(200)
      const json = await res.json()

      const numberOfDoctoralSchools = 33 // Go to data.ts and CTR+F "level: 'doctoral'"
      expect(Object.keys(json).length).toBe(numberOfDoctoralSchools + 4) // +4 because 'specialGroup' field and 3 uni fields.
      expect(json).toHaveProperty('specialGroup')
      expect(json.specialGroup).toHaveProperty('doctoral')
      expect(json.specialGroup.doctoral).toBe(true)
    })
  })

  it('Specific doctoral school iam gives access to the corresponding doctoral programmes', async () => {
    const res = await api.post('', {
      userId: 'doctoralschools-user',
      iamGroups: ['hy-tutkijakoulut-hymy-jory'],
    })

    expect(res.status).toBe(200)
    const json = await res.json()

      ;[
        'T920101',
        'T920102',
        'T920103',
        'T920104',
        'T920105',
        'T920106',
        'T920107',
        'T920108',
        'T920109',
        'T920110',
        'T920111',
      ].forEach((programme) => {
        expect(json).toHaveProperty(programme)
        expect(json[programme].read).toBe(true)
        expect(json[programme].write).toBeFalsy()
        expect(json[programme].admin).toBeFalsy()
      })
  })
})
