import { Router } from 'express'
import { routerOptions } from '@routes/config'
import { AllowedRequestMethod, RoutePath } from '@types'

export const router = Router(routerOptions)

const message = 'Api Error'

router[AllowedRequestMethod.GET](RoutePath.Error, (): void => {
  throw new Error(message)
})
