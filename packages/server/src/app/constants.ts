import { AllowedRequestMethod, ApiVersion } from '../types'

export const {
  NODE_ENV = 'development',
  SERVER_PORT = 3333,
} = process.env

export const ALLOWED_API_VERSIONS: Array<ApiVersion> = [
  ApiVersion.V1,
]

export const ALLOWED_REQUEST_METHODS: Array<AllowedRequestMethod> = [
  AllowedRequestMethod.DELETE,
  AllowedRequestMethod.GET,
  AllowedRequestMethod.OPTIONS,
  AllowedRequestMethod.PATCH,
  AllowedRequestMethod.POST,
  AllowedRequestMethod.PUT,
]

const ALLOWED_ORIGINS = [
  'http://localhost:3000',
]

const ALLOWED_ORIGIN_HEADERS = [
  'Accept',
  'Content-Type',
  'Origin',
]

enum AccessControlField {
  AccessControlAllowOrigin = 'Access-Control-Allow-Origin',
  AccessControlAllowMethods = 'Access-Control-Allow-Methods',
  AccessControlAllowHeaders = 'Access-Control-Allow-Headers',
}

export const ACCESS_CONTROL_FIELDS: Record<AccessControlField, Array<string>> = {
  [AccessControlField.AccessControlAllowOrigin]: ALLOWED_ORIGINS,
  [AccessControlField.AccessControlAllowMethods]: ALLOWED_REQUEST_METHODS,
  [AccessControlField.AccessControlAllowHeaders]: ALLOWED_ORIGIN_HEADERS,
}
