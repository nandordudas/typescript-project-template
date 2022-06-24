export interface ParametersBase {
  apiVersion: ApiVersion
}

export interface ResponseBase {
  data?: Record<string, any>
  message: string
}

export enum ApiVersion {
  V1 = 'v1',
}

export enum RoutePath {
  Home = '/',
}

export enum AllowedRequestMethod {
  DELETE = 'delete',
  GET = 'get',
  OPTIONS = 'options',
  PATCH = 'patch',
  POST = 'post',
  PUT = 'put',
}
