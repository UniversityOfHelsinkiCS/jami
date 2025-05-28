import winston from 'winston'
import LokiTransport from 'winston-loki'

import { inProduction } from './config'

const { combine, timestamp, printf, splat } = winston.format

const transports = []

const LOKI_HOST = 'http://loki-svc.toska-lokki.svc.cluster.local:3100'

transports.push(new winston.transports.File({ filename: 'debug.log' }))

if (!inProduction) {
  const devFormat = printf(
    ({ level, message, timestamp, ...rest }) =>
      `${timestamp} ${level}: ${message} ${JSON.stringify(rest)}`,
  )

  transports.push(
    new LokiTransport({
      host: LOKI_HOST,
      labels: { app: 'jami', environment: process.env.NODE_ENV || 'production' }
    })
  )

  transports.push(
    new winston.transports.Console({
      level: 'debug',
      format: combine(splat(), timestamp(), devFormat),
    }),
  )
} else {
  const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  }

  const prodFormat = winston.format.printf(({ level, ...rest }) =>
    JSON.stringify({
      level: levels[level],
      ...rest,
    }),
  )

  transports.push(new winston.transports.Console({ format: prodFormat }))
}

const logger = winston.createLogger({ transports })

export default logger
