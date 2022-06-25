import { json } from 'express'
import { cors } from './cors'
import { handleError } from './handle-error'
import { isApiVersionAllowed } from './is-api-version-allowed'
import type { MiddlewareMap } from './types'

export * from './is-user-authenticated'

export const middlewares: MiddlewareMap = {
  pre: [
    cors(),
    isApiVersionAllowed(),
    json(),
  ],
  post: [
    handleError(),
  ],
}
