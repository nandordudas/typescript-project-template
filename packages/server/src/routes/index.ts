import type { Router } from 'express'
import { router as errorRouter } from '././error/error'
import { router as homeRouter } from './home'

export const routes: Array<Router> = [
  homeRouter,
  errorRouter,
]
