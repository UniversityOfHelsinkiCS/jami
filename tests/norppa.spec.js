import { describe, expect, it } from 'vitest'
import { api } from './util/utils'

describe.concurrent('Norppa', () => {
  it('Feedback liaisons special group granted to user with feedback liaison iam and jory iam', async () => {
    const res = await api.post('', {
      userId: 'tkt-norppa-haba',
      iamGroups: ['hy-mltdk-tkt-jory', 'hy-palautevastaavat'],
    })

    expect(res.status).toBe(200)

    const access = await res.json()

    const specialGroup = access.specialGroup

    expect(specialGroup).toHaveProperty('feedbackLiaison')
    expect(specialGroup.feedbackLiaison).toHaveLength(1)
    expect(specialGroup.feedbackLiaison).toContain('KH50_005')
  })

  it('Feedback liaisons special group not granted to user with only jory iam', async () => {
    const res = await api.post('', {
      userId: 'tkt-norppa-haba',
      iamGroups: ['hy-mltdk-tkt-jory'],
    })

    expect(res.status).toBe(200)

    const access = await res.json()

    const specialGroup = access.specialGroup

    expect(specialGroup).not.toHaveProperty('feedbackLiaison')
  })

  it('Feedback liaisons special group not granted to user with only feedback liaison iam', async () => {
    const res = await api.post('', {
      userId: 'tkt-norppa-haba',
      iamGroups: ['hy-palautevastaavat'],
    })

    expect(res.status).toBe(200)

    const access = await res.json()

    const specialGroup = access.specialGroup

    expect(specialGroup).not.toHaveProperty('feedbackLiaison')
  })

  it('Feedback liaisons special group contains programme codes of each programme where user is in jory', async () => {
    const res = await api.post('', {
      userId: 'tkt-norppa-haba',
      iamGroups: [
        'hy-ltdk-psyk-jory', // ['300-K001', '300-M004']
        'hy-ltdk-ll-jory', // ['300-M001' '300-M003']
        'hy-palautevastaavat',
      ],
    })

    expect(res.status).toBe(200)

    const access = await res.json()

    const specialGroup = access.specialGroup

    expect(specialGroup).toHaveProperty('feedbackLiaison')
    expect(specialGroup.feedbackLiaison).toHaveLength(4)
    expect(specialGroup.feedbackLiaison).toContain('KH30_001')
    expect(specialGroup.feedbackLiaison).toContain('MH30_004')
    expect(specialGroup.feedbackLiaison).toContain('MH30_001')
  })
})
