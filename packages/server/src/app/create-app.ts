import type { Router } from 'express'
import express from 'express'
import { middlewares } from '@middlewares'

const { pre: preMiddlewares, post: postMiddlewares } = middlewares

export const createApp = (routes: Array<Router>) => {
  const app = express()

  app.use('/api/:apiVersion', preMiddlewares, routes, postMiddlewares)

  return app
}
