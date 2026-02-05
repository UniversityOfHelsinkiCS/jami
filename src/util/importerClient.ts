import axios from 'axios'
import { importerUrl, importerToken } from './config'
import logger from './logger'

const importerClient = axios.create({
  headers: {
    token: importerToken,
  },
  baseURL: importerUrl,
})
importerClient.defaults.timeout = 30000

const getImporterClient = () => {
  if (!importerToken) {
    logger.error("Importer token not set, can't return client!")
    return null
  }
  return importerClient
}

export default getImporterClient
