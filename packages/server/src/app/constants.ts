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
