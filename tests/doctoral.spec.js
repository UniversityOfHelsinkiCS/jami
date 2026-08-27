import { describe, expect, it } from 'vitest'
import { api } from './util/utils'

describe.concurrent('Doctoral schools', () => {
  it('Doctoral iam gives access to all doctoral schools & gives "doctoral" special group', async () => {
    ;['hy-tohtorikoulutus-johtoryhma' /*'hy-tine'*/].forEach(async (iam) => {
      const res = await api.post('', {
        userId: 'doctoralschools-user',
        iamGroups: [iam],
      })

      expect(res.status).toBe(200)
      const json = await res.json()

      const numberOfDoctoralSchools = 33 + 14 // Go to data.ts and CTR+F "level: 'doctoral'" old + new programmes
      expect(Object.keys(json).length).toBe(numberOfDoctoralSchools + 1) // +1 because 'specialGroup' field.
      expect(json).toHaveProperty('specialGroup')
      expect(json.specialGroup).toHaveProperty('doctoral')
      expect(json.specialGroup.doctoral).toBe(true)
    })
  })
})
