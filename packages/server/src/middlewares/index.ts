import { json } from 'express'
import { handleError } from './handle-error'
import { isApiVersionAllowed } from './is-api-version-allowed'
import { isRequestMethodAllowed } from './is-request-method-allowed'
import type { MiddlewareMap } from './types'

export * from './is-user-authenticated'

export const middlewares: MiddlewareMap = {
  pre: [
    isRequestMethodAllowed(),
    isApiVersionAllowed(),
    json(),
  ],
  post: [
    handleError(),
  ],
}
