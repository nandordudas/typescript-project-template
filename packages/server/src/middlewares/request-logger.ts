import { log } from 'node:console'
import type { RequestHandler } from 'express'

export const requestLogger: () => RequestHandler = () => (
  request,
  _response,
  next,
) => {
  const { body, params, query, url } = request

  log('request', JSON.stringify({ body, params, query, url }))
  next()
}
