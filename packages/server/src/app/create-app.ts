import type { ErrorRequestHandler, RequestHandler, Router } from 'express'
import express from 'express'
import { middlewares } from '@middlewares'
import { Handlers as SentryHandlers, Integrations as SentryIntegrations, init } from '@sentry/node'
import { Integrations as TracingIntegrations } from '@sentry/tracing'

const { pre: preMiddlewares, post: postMiddlewares } = middlewares
const tracesSampleRate = 1.0

export const createApp = (routes: Array<Router>) => {
  const app = express()

  init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
      new SentryIntegrations.Http({ tracing: true }),
      new TracingIntegrations.Express({ app }),
    ],
    // eslint-disable-next-line object-shorthand
    tracesSampleRate: tracesSampleRate,
  })

  app.use(SentryHandlers.requestHandler() as RequestHandler)
  app.use(SentryHandlers.tracingHandler())

  app.use('/api/:apiVersion', preMiddlewares, routes)
  app.use(SentryHandlers.errorHandler() as ErrorRequestHandler)
  app.use(postMiddlewares)

  return app
}
