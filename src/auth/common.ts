const isNumber = (value: string) => !Number.isNaN(parseInt(value, 10))

export const normalizeOrganisationCode = (code: string) => {
  // Old doctoral programmes
  if (code.startsWith('T')) {
    return code.replace('T', '7')
  }
  // New doctoral programmes
  if (code.startsWith('DP')) {
    return code.replace('P', 'S')
  }
  // Faculty codes
  if (!code.includes('_')) {
    return code
  }
  // Bachelor and master programme codes to organisation codes
  const [left, right] = code.split('_')
  const prefix = [...left].filter(isNumber).join('')
  const suffix = `${left[0]}${right}`
  const providercode = `${prefix}0-${suffix}`
  return providercode
}

export const mapToDegreeCode = (organisationCode: string) => {
  if (!organisationCode) return ''

  const isKielikeskusOrAvoin = ['H906', 'H930'].includes(organisationCode)
  if (isKielikeskusOrAvoin) {
    return organisationCode
  }
  // New doctoral programmes
  if (organisationCode.startsWith('DS') && organisationCode.length === 5) {
    return organisationCode.replace('S', 'P')
  }

  if (organisationCode.length < 7) return ''
  // Old doctoral programmes use degree code while other have organisation code in joryMap
  const doctoral = organisationCode[0] === 'T'
  if (doctoral) {
    return organisationCode
  }
  // Make organisation codes to degree codes, for example 300-M003 to MH30_003
  const [start, end] = organisationCode.split('-')
  if (end && end.length < 3) return ''
  if (start.length < 2) return ''
  const masters = end[0] === 'M'
  const code = `${masters ? 'M' : 'K'}H${start.substr(0, 2)}_${end.substr(-3)}`
  return code
}
