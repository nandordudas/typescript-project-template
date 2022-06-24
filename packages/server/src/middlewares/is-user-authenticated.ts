import type { RequestHandler } from 'express'
import type { IsAuthenticatedLocalData } from './types'

export const isUserAuthenticated: <
  Params, Request, Response, Query, Locals extends IsAuthenticatedLocalData,
>() => RequestHandler<Params, Request, Response, Query, Locals> = () => (
  _request,
  response,
  next,
) => {
  response.locals.isAuthenticated = false

  next()
}
