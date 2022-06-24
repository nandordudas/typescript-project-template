import type { RequestHandler } from 'express'
import { ALLOWED_REQUEST_METHODS } from '../app/constants'
import type { AllowedRequestMethod } from '../types'

const errorMessage = 'Method not allowed'

export const isRequestMethodAllowed: () => RequestHandler = () => (
  request,
  _response,
  next,
) => {
  const requestMethod = request.method.toLowerCase() as AllowedRequestMethod

  return !ALLOWED_REQUEST_METHODS.includes(requestMethod)
    ? next(new Error(errorMessage))
    : next()
}
