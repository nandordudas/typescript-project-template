import type { Request, RequestHandler } from 'express'
import { ALLOWED_API_VERSIONS } from '../app/constants'
import type { ParametersBase } from '../types'

const errorMessage = 'Api version not allowed'

export const isApiVersionAllowed: () => RequestHandler = () => (
  request,
  _response,
  next,
) => {
  const { params } = request as unknown as Request<ParametersBase>

  return !ALLOWED_API_VERSIONS.includes(params.apiVersion)
    ? next(new Error(errorMessage))
    : next()
}
