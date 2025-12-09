import * as Sentry from '@sentry/node'
import { nodeProfilingIntegration } from '@sentry/profiling-node'

import { inProduction } from './config'

if (inProduction) {
  Sentry.init({
    dsn: 'https://1919717ee2f3859ad3162c59a50266e5@toska.it.helsinki.fi/21',
    integrations: [nodeProfilingIntegration()],
    tracesSampleRate: 1.0,
    profilesSampleRate: 1.0,
  })
}
