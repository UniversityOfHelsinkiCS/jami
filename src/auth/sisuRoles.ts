import getImporterClient from '../util/importerClient'

const importerClient = getImporterClient()

const sisuRolesGivingFullAccess = [
  'hy-ac-kosu1',
  'hy-ac-kosu2',
  'hy-ac-kosu3',
  'hy-ac-opne1',
  'hy-ac-opne2',
  'hy-ac-opne3',
  'hy-ac-sview',
]

type UserCacheEntry = {
  hasAccess: boolean
  accessedAt: Date
}

const userCache = new Map<string, UserCacheEntry>()

export const hasFullSisuAccess = async (personId: string) => {
  if (!importerClient) return false

  if (userCache.has(personId)) {
    const { hasAccess, accessedAt } = userCache.get(personId)

    // Cache is valid for 24 hours
    if (new Date().getTime() - accessedAt.getTime() < 24 * 60 * 60 * 1000) {
      return hasAccess
    }
  }

  try {
    const { data } = await importerClient.get(`/jami/sisuroles/${personId}`)
  
    if (data && Array.isArray(data)) {
      const hasFullAccessToSisu = data.some((role) =>
        sisuRolesGivingFullAccess.includes(role.accessroleId),
      )
      userCache.set(personId, {
        hasAccess: hasFullAccessToSisu,
        accessedAt: new Date(),
      })
      return hasFullAccessToSisu
    }
    return false
    
  catch (error) {
    return false    
  }
}
