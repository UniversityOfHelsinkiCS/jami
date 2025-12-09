import { describe, expect, it } from 'vitest'
import { FACULTIES as data } from '../src/organisation/faculties'
import { FACULTY_MAP } from '../src/organisation/types'

describe('Organisation data', () => {
  it('Has faculties in a valid format', () => {
    const faculties = data

    // There should be 13 faculties
    expect(faculties.length).toBe(13)

    // Each faculty code should be unique
    const facultyCodes = faculties.map((faculty) => faculty.code)
    expect(facultyCodes.length).toBe(new Set(facultyCodes).size)

    faculties.forEach((faculty) => {
      // Faculty should have a name in fi, en and sv
      expect(faculty).toHaveProperty('name')
      expect(faculty.name).toHaveProperty('fi')
      expect(faculty.name).toHaveProperty('en')
      expect(faculty.name).toHaveProperty('sv')

      expect(faculty).toHaveProperty('programmes')
      if (!faculty.independentInstitute) {
        expect(faculty.programmes.length).toBeGreaterThan(0)
      }
    })
  })

  it('Has programmes in valid format', () => {
    const programmes = data.flatMap((faculty) => faculty.programmes)

    // Each programme key should be unique
    const programmeKeys = programmes.map((programme) => programme.key)
    expect(programmeKeys.length).toBe(new Set(programmeKeys).size)

    programmes.forEach((programme) => {
      // Programme should have a key
      expect(programme).toHaveProperty('key')

      // Programme should have a name in fi, en and sv
      expect(programme).toHaveProperty('name')
      expect(programme.name).toHaveProperty('fi')
      expect(programme.name).toHaveProperty('en')
      expect(programme.name).toHaveProperty('sv')

      // Programme level should be either 'bachelor', 'master' or 'doctoral'
      expect(programme).toHaveProperty('level')
      expect(['bachelor', 'master', 'doctoral']).toContain(programme.level)

      // Programme should have valid companion faculties
      expect(programme).toHaveProperty('companionFaculties')
      programme.companionFaculties.forEach((facultyId) => {
        expect(FACULTY_MAP).toHaveProperty(facultyId)
      })

      // Programme should define whether its international or not
      expect(programme).toHaveProperty('international')
      expect(typeof programme.international).toBe('boolean')
    })
  })

  it('Facultymap should map to actual faculty in data', () => {
    Object.keys(FACULTY_MAP).forEach((facultyId) => {
      const code = FACULTY_MAP[facultyId]
      expect(data).toContainEqual(expect.objectContaining({ code }))
    })
  })
})
