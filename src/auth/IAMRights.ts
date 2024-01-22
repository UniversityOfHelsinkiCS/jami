import {
  isSuperAdminIam,
  isAdminIam,
  isOpenUniIam,
  isHyOneIam,
  isJoryIam,
  isKosuIam,
  isUniversityWideIam,
  isDoctoralIam,
  iamToOrganisationCode,
  isEmployeeIam,
  iamToDoctoralSchool,
  kosuIamToFaculties,
  opetusVaradekaani,
  isStudyLeaderGroup,
  isKatselmusViewer,
  dekaaniIamToFaculty
} from './IAMConfig'
import { FACULTIES } from '../organisation/faculties'
import { mapToDegreeCode } from './common'
import { OrganisationAccess } from '../types'
import { Programme } from '../organisation/types'

type AccessSpecialGroupFunction = (hyGroups: string[]) => { access?: { [programmeCode: string]: OrganisationAccess }, specialGroup?: { [key: string]: boolean } }

/**
 * Return given access to all programmes where predicate is true
 * (all if no predicate defined)
 */
const getAllProgrammeAccess = (accessLevel: OrganisationAccess, where?: (program: Programme) => boolean): { [key: string]: OrganisationAccess } => {
  const access = {}
  FACULTIES.forEach((faculty) => {
    faculty.programmes.forEach((program) => {
      if (where?.(program) === false) return
      access[program.key] = { ...accessLevel }
    })
  })
  return access
}

/**
 * Grant super-admin rights if the user has correct iams (eg. grp-toska)
 */
const getSuperAdmin: AccessSpecialGroupFunction = (hyGroups) => {
  const isToska = hyGroups.some(isSuperAdminIam)
  if (isToska) {
    return { specialGroup: { superAdmin: true } }
  }
  return {}
}

/**
 * NOT USED
 * Grant admin rights if the user has correct iams (eg. grp-ospa)
 * @returns admin special group
 */
const getAdmin: AccessSpecialGroupFunction = (hyGroups) => {
  const isOspa = hyGroups.some(isAdminIam)
  if (isOspa) {
    return { specialGroup: { admin: true } }
  }
  return {}
}

/**
 * Needed for Oodikone
 * Grant open uni rights if the user has correct iams (eg. hy-ypa-opa-dojo)
 * @returns openUni special group
 */
const getOpenUni: AccessSpecialGroupFunction = (hyGroups) => {
  const isOpenUni = hyGroups.some(isOpenUniIam)
  if (isOpenUni) {
    return { specialGroup: { openUni: true } }
  }
  return {}
}

/**
 * Needed for Oodikone
 * Grant teachers rights if the user has correct iams (eg. hy-one)
 * @returns hyOne special group
 */
const getHyOne: AccessSpecialGroupFunction = (hyGroups) => {
  const isHyIam = hyGroups.some(isHyOneIam)
  if (isHyIam) {
    return { specialGroup: { hyOne: true } }
  }
  return {}
}

/**
 * Needed for Oodikone
 * Grant jory special group if the user has jory iams (eg. hy-ttdk-tuk-jory)
 * @returns jory special group
 */
const getJory: AccessSpecialGroupFunction = (hyGroups) => {
  const isJory = hyGroups.some(isJoryIam)
  if (isJory) {
    return { specialGroup: { jory: true } }
  }
  return {}
}

/**
 * Needed for Oodikone
 * Grant kosu special group if the user has kosu iams (eg. hy-ypa-opa-kosu-kumpula)
 * @returns kosu special group
 */
const getKosu: AccessSpecialGroupFunction = (hyGroups) => {
  const isKosu = hyGroups.some(isKosuIam)
  if (isKosu) {
    return { specialGroup: { kosu: true } }
  }
  return {}
}

/**
 * Needed for Oodikone
 * Grant katselmusViewer special group, which means that the user can see oodikone's
 * evaluationoverview which is linked in tilannekuvalomake
 * @returns katselmusViewer special group
 */
const getKatselmusViewer: AccessSpecialGroupFunction = (hyGroups) => {
  const katselmusViewer = hyGroups.some(isKatselmusViewer)

  if (katselmusViewer) {
    return { specialGroup: { katselmusViewer: true } }
  }
  return {}
}

/**
 * Get special groups based on IAM-groups
 */
const getSpecialGroups: AccessSpecialGroupFunction = (hyGroups) => {
  let specialGroup = {}

  ;[
    getAdmin,
    getSuperAdmin,
    getOpenUni,
    getHyOne,
    getJory,
    getKosu,
    getKatselmusViewer,
  ]
    .map((f) => f(hyGroups))
    .forEach(({ specialGroup: newSpecialGroup }) => {
      specialGroup = { ...specialGroup, ...newSpecialGroup }
    })

  return { specialGroup }
}

/**
 * Grant reading rights to all programmes if user has uni wide IAM (eg. hy-rehtoraatti)
 * @returns read access to ALL programmes
 */
const getUniversityReadingRights: AccessSpecialGroupFunction = (hyGroups) => {
  const hasUniversityReadingRights = hyGroups.some(isUniversityWideIam)
  if (!hasUniversityReadingRights) {
    return {}
  }

  const access = getAllProgrammeAccess({
    read: true,
    write: false,
    admin: false,
  })
  const specialGroup = { allProgrammes: true }

  return { access, specialGroup }
}

/**
 * Grant reading rights to programmes of faculties if user is kosu or dekaanaatti of some faculties
 */
const getFacultyReadingRights: AccessSpecialGroupFunction = (hyGroups) => {
  // faculty codes from kosu iam
  const facultyCodes = hyGroups
    .flatMap(kosuIamToFaculties)
    // faculty codes from dekanaatti iam
    .concat(hyGroups.map(dekaaniIamToFaculty))
    .filter(Boolean)
  const access = {}
  facultyCodes.forEach((fc) => {
    const faculty = FACULTIES.find((faculty) => faculty.code === fc)
    const programmeCodes = faculty.programmes.map((p) => p.key)
    programmeCodes.forEach((code) => {
      access[code] = { read: true, write: false, admin: false }
    })
  })
  return { access, specialGroup: {} }
}

/**
 * Grant admin rights to faculty programmes if user is opetusvaradekaani of that faculty
 */
const getFacultyAdminRights: AccessSpecialGroupFunction = (hyGroups) => {
  if (!hyGroups.includes(opetusVaradekaani)) return {}
  const facultyCodes = hyGroups.map(dekaaniIamToFaculty).filter(Boolean)

  const access = {}
  facultyCodes.forEach((fc) => {
    const faculty = FACULTIES.find((faculty) => faculty.code === fc)
    const programmeCodes = faculty.programmes.map((p) => p.key)
    programmeCodes.forEach((code) => {
      access[code] = { read: true, write: true, admin: true }
    })
  })
  return { access, specialGroup: {} }
}

/**
 * Grant reading rights to all doctoral programmes if the user belongs to doctoral IAM
 * @returns read access to ALL doctoral programs
 */
const getDoctoralAccess: AccessSpecialGroupFunction = (hyGroups) => {
  const hasDoctoralReadingRights = hyGroups.some(isDoctoralIam)
  if (!hasDoctoralReadingRights) return {}
  const access = getAllProgrammeAccess(
    { read: true, write: false, admin: false },
    (program) => program.level === 'doctoral',
  )
  const specialGroup = { doctoral: true }

  return { access, specialGroup }
}

/**
 * Grants reading rights to all doctoral programmes that belong to user's
 * doctoral school IAMs
 * @returns read access to doctoral programs
 */
const getDoctoralSchoolAccess: AccessSpecialGroupFunction = (hyGroups) => {
  const doctoralProgrammeCodes = hyGroups.flatMap(iamToDoctoralSchool)
  const access = {}
  doctoralProgrammeCodes.forEach((code) => {
    if (!code) return
    access[code] = { read: true }
  })
  return { access }
}

/**
 * Grant admin access if the user belongs to studyprogramme's manager group and is a study program leader
 */
const getProgrammeAdminAccess: AccessSpecialGroupFunction = (hyGroups) => {
  const orgCodes = hyGroups
    .filter((iam) => isStudyLeaderGroup(iam, hyGroups))
    .map((iam) => iamToOrganisationCode(iam))
    .filter(Boolean)

  const degreeCodes = orgCodes.flatMap((codes) => codes.map(mapToDegreeCode))

  if (!(degreeCodes?.length > 0)) {
    return {
      access: {},
    }
  }

  const access = {}
  degreeCodes.forEach((code) => {
    access[code] = { read: true, write: true, admin: true }
  })
  return { access }
}

/**
 * UPDATE: nobody gets this. Kept here for documentation and consistency with other Toska software
 * Grant write and read access if the user belongs to employees group and studyprogramme's manager group
 * @param {string[]} hyGroups
 */
// eslint-disable-next-line no-unused-vars
const getProgrammeWriteAccess: AccessSpecialGroupFunction = (hyGroups) => {
  if (!hyGroups.some(isEmployeeIam)) return {}
  const orgCodes = hyGroups
    .map((iam) => iamToOrganisationCode(iam))
    .filter(Boolean)
  const degreeCodes = orgCodes.flatMap((codes) => codes.map(mapToDegreeCode))
  const access = {}
  degreeCodes.forEach((code) => {
    if (!code) return
    access[code] = { read: true, write: true, admin: false }
  })

  return { access }
}

/**
 * Grant read access if the user belongs to studyprogramme's manager group
 */
const getProgrammeReadAccess: AccessSpecialGroupFunction = (hyGroups) => {
  const orgCodes = hyGroups
    .map((iam) => iamToOrganisationCode(iam))
    .filter(Boolean)
  const degreeCodes = orgCodes.flatMap((codes) => codes.map(mapToDegreeCode))
  const access = {}
  degreeCodes.forEach((code) => {
    if (!code) return
    access[code] = { read: true, write: false, admin: false }
  })

  return { access }
}

/**
 * Gets access rights and special groups,
 * based on IAM-groups in IAM header string
 */
const getIAMRights: AccessSpecialGroupFunction = (hyGroups) => {
  let access = {}
  let specialGroup = {}

  ;[
    getUniversityReadingRights,
    getFacultyReadingRights,
    getDoctoralAccess,
    getDoctoralSchoolAccess,
    getProgrammeReadAccess,
    // getProgrammeWriteAccess,
    getProgrammeAdminAccess,
    getFacultyAdminRights,
    getSpecialGroups,
  ]
    .map((f) => f(hyGroups))
    .forEach((accessInfo) => {
      access = { ...access, ...accessInfo.access }
      specialGroup = { ...specialGroup, ...accessInfo.specialGroup }
    })

  return { access, specialGroup }
}

export default getIAMRights
