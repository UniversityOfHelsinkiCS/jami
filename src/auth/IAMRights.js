const {
  isSuperAdminIam,
  isAdminIam,
  isOpenUniIam,
  isHyOneIam,
  isUniversityWideIam,
  isDoctoralIam,
  iamToOrganisationCode,
  isEmployeeIam,
  iamToDoctoralSchool,
  kosuIamToFaculties,
  dekaaniIamToFaculty,
  opetusVaradekaani,
  isStudyLeaderGroup,
} = require('./IAMConfig')
const { data } = require('./data')
const { mapToDegreeCode } = require('./common')

/**
 * Return given access to all programmes where predicate is true
 * (all if no predicate defined)
 * @param {object} accessLevel
 * @param {(program: object) => boolean} where
 * @returns {object} access to programmes
 */
const getAllProgrammeAccess = (accessLevel, where) => {
  const access = {}
  data.forEach((faculty) => {
    faculty.programmes.forEach((program) => {
      if (where?.(program) === false) return
      access[program.key] = { ...accessLevel }
    })
  })
  return access
}

/**
 * NOT USED
 * Grant super-admin rights if the user has correct iams (eg. grp-toska)
 * @param {string[]} hyGroups
 * @returns superAdmin special group
 */
const getSuperAdmin = (hyGroups) => {
  const isToska = hyGroups.some(isSuperAdminIam)
  if (isToska) {
    return { specialGroup: { superAdmin: true } }
  }
  return {}
}

/**
 * NOT USED
 * Grant admin rights if the user has correct iams (eg. grp-ospa)
 * @param {string[]} hyGroups
 * @returns admin special group
 */
const getAdmin = (hyGroups) => {
  const isOspa = hyGroups.some(isAdminIam)
  if (isOspa) {
    return { specialGroup: { admin: true } }
  }
  return {}
}

/**
 * Needed for Oodikone
 * Grant open uni rights if the user has correct iams (eg. hy-ypa-opa-dojo)
 * @param {string[]} hyGroups
 * @returns openUni special group
 */
const getOpenUni = (hyGroups) => {
  const isOpenUni = hyGroups.some(isOpenUniIam)
  if (isOpenUni) {
    return { specialGroup: { openUni: true } }
  }
  return {}
}

/**
 * Needed for Oodikone
 * Grant teachers rights if the user has correct iams (eg. hy-one)
 * @param {string[]} hyGroups
 * @returns hyOne special group
 */
const getHyOne = (hyGroups) => {
  const isHyIam = hyGroups.some(isHyOneIam)
  if (isHyIam) {
    return { specialGroup: { hyOne: true } }
  }
  return {}
}

/**
 * Grant reading rights to all programmes if user has uni wide IAM (eg. hy-rehtoraatti)
 * @param {string[]} hyGroups
 * @returns read access to ALL programmes
 */
const getUniversityReadingRights = (hyGroups) => {
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
 * @param {string[]} hyGroups
 */
const getFacultyReadingRights = (hyGroups) => {
  // faculty codes from kosu iam
  const facultyCodes = hyGroups
    .flatMap(kosuIamToFaculties)
    // faculty codes from dekanaatti iam
    .concat(hyGroups.map(dekaaniIamToFaculty))
    .filter(Boolean)
  const access = {}
  facultyCodes.forEach((fc) => {
    const faculty = data.find((faculty) => faculty.code === fc)
    const programmeCodes = faculty.programmes.map((p) => p.key)
    programmeCodes.forEach((code) => {
      access[code] = { read: true, write: false, admin: false }
    })
  })
  return { access, specialGroup: {} }
}

/**
 * Grant admin rights to faculty programmes if user is opetusvaradekaani of that faculty
 * @param {string[]} hyGroups
 */
const getFacultyAdminRights = (hyGroups) => {
  if (!hyGroups.includes(opetusVaradekaani)) return {}
  const facultyCodes = hyGroups.map(dekaaniIamToFaculty).filter(Boolean)

  const access = {}
  facultyCodes.forEach((fc) => {
    const faculty = data.find((faculty) => faculty.code === fc)
    const programmeCodes = faculty.programmes.map((p) => p.key)
    programmeCodes.forEach((code) => {
      access[code] = { read: true, write: true, admin: true }
    })
  })
  return { access, specialGroup: {} }
}

/**
 * Grant reading rights to all doctoral programmes if the user belongs to doctoral IAM
 * @param {string[]} hyGroups
 * @returns read access to ALL doctoral programs
 */
const getDoctoralAccess = (hyGroups) => {
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
 * @param {string[]} hyGroups
 * @returns read access to doctoral programs
 */
const getDoctoralSchoolAccess = (hyGroups) => {
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
 * @param {string[]} hyGroups
 */
const getProgrammeAdminAccess = (hyGroups) => {
  const orgCodes = hyGroups
    .filter((iam) => isStudyLeaderGroup(iam, hyGroups))
    .map((iam) => iamToOrganisationCode(iam))
    .filter(Boolean)

  const degreeCodes = orgCodes.flatMap((codes) => codes.map(mapToDegreeCode))

  if (!degreeCodes?.length > 0) {
    return {}
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
const getProgrammeWriteAccess = (hyGroups) => {
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
 * @param {string[]} hyGroups
 */
const getProgrammeReadAccess = (hyGroups) => {
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
 * @param {string} hyGroupsHeader
 */
const getIAMRights = (hyGroups) => {
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
    getAdmin,
    getSuperAdmin,
    getOpenUni,
    getHyOne,
  ]
    .map((f) => f(hyGroups))
    .forEach(({ access: newAccess, specialGroup: newSpecialGroup }) => {
      access = { ...access, ...newAccess }
      specialGroup = { ...specialGroup, ...newSpecialGroup }
    })

  return { access, specialGroup }
}

module.exports = {
  getIAMRights,
}
