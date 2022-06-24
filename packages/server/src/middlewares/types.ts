import type { ErrorRequestHandler, RequestHandler } from 'express'

export interface MiddlewareMap<T extends RequestHandler = RequestHandler> {
  readonly post: Array<T | ErrorRequestHandler>
  readonly pre: Array<T>
}

export interface IsAuthenticatedLocalData {
  isAuthenticated: boolean
  token?: string
}
