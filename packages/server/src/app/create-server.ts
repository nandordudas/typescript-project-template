import type { Express } from 'express'
import { routes } from '../routes'
import { SERVER_PORT } from './constants'

export const createServer = (app: Express) =>
  app.use(routes).listen(SERVER_PORT, 'localhost')
