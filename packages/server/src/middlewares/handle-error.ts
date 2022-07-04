import type { ErrorRequestHandler, Response } from 'express'
import type { ResponseBase } from '@types'
import { captureException } from '@sentry/node'

const defaultStatusCode = 500
const defaultErrorMessage = 'Internal Server Error'

export const handleError: () => ErrorRequestHandler = () => (
  error,
  _request,
  response: Response<ResponseBase>,
  next,
) => {
  captureException(error)
  if (error instanceof Error) {
    const message = error.message || defaultErrorMessage

    return response.status(defaultStatusCode).json({ message })
  }

  next()
}
