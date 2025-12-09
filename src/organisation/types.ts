import { TranslatedName } from '../types'

export const FACULTY_MAP = {
  teologinen: 'H10',
  oikeustieteellinen: 'H20',
  lääketieteellinen: 'H30',
  humanistinen: 'H40',
  'matemaattis-luonnontieteellinen': 'H50',
  farmasia: 'H55',
  'bio- ja ympäristötieteellinen': 'H57',
  kasvatustieteellinen: 'H60',
  valtiotieteellinen: 'H70',
  svenska: 'H74',
  'maatalous-metsätieteellinen': 'H80',
  eläinlääketieteellinen: 'H90',
  kielikeskus: 'H906',
} as const

export type FacultyCode = (typeof FACULTY_MAP)[keyof typeof FACULTY_MAP]

export type FacultyKey = keyof typeof FACULTY_MAP

export interface Faculty {
  readonly code: FacultyCode
  readonly name: TranslatedName
  readonly programmes: Readonly<Programme[]>
}

export interface IndependentInstitute extends Faculty {
  readonly code: FacultyCode
  readonly name: TranslatedName
  readonly independentInstitute: true
}

export type ProgrammeLevel = 'bachelor' | 'master' | 'doctoral'

export type Programme = {
  readonly key: string
  readonly name: TranslatedName
  readonly level: ProgrammeLevel
  readonly companionFaculties: Readonly<FacultyKey[]>
  readonly international: boolean
}
