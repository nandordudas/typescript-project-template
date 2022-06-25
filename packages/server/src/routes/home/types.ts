import type { ParametersBase, ResponseBase } from '@types'

export interface Parameters extends ParametersBase {}

export interface Response extends ResponseBase {}

export interface Request {
  message: string
}

export interface Query {
  name: string
}
