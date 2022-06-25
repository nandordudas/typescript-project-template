import type { RequestHandler } from 'express'
import { ACCESS_CONTROL_FIELDS } from '../app'

export const cors: () => RequestHandler = () => (_request, response, next) => {
  Object.entries(ACCESS_CONTROL_FIELDS).forEach(([fieldName, value]) => {
    response.header(fieldName, value.join(','))
  })

  next()
}
