import { Router } from 'express'
import { tryCatch } from '@typescript-project-template/shared'
import { isUserAuthenticated } from '../../middlewares'
import type { IsAuthenticatedLocalData } from '../../middlewares/types'
import { AllowedRequestMethod, RoutePath } from '../../types'
import { routerOptions } from '../config'
import type { Parameters, Query, Request, Response } from './types'

export const router = Router(routerOptions)

const message = 'home'

router[AllowedRequestMethod.GET]<
  Parameters, Response, null, Query
>(RoutePath.Home, (request, response) => {
  const { params, query, url } = request

  response
    .status(200)
    .json({ data: { params, query, url }, message })
})

router[AllowedRequestMethod.POST]<
  Parameters, Response, Request, Query, IsAuthenticatedLocalData
>(RoutePath.Home, isUserAuthenticated(), (request, response, next) => {
  const { body } = request

  if (body.message !== 'go')
    return next(new Error('No go'))

  const { params, query, url } = request
  const { locals } = response

  response
    .status(200)
    .json({ data: { body, locals, params, query, url }, message })
})

router[AllowedRequestMethod.PUT]<
  Parameters, Response, Request, Query, IsAuthenticatedLocalData
>(RoutePath.Home, isUserAuthenticated(), async (request, response, next) => {
  const { locals } = response

  if (!locals.isAuthenticated) {
    const { error } = await tryCatch(Promise.reject(new Error('No go')))

    return next(error)
  }

  const { body, params, query, url } = request

  response
    .status(200)
    .json({ data: { locals, body, params, query, url }, message })
})
