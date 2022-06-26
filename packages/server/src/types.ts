export interface ParametersBase {
  apiVersion: ApiVersion
}

export interface ResponseBase<T extends Record<string, any> = any> {
  data?: T
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

// TODO: import from shared package
export type Nullable<T> = T | null
