import { routes } from '../routes'
import { createApp } from './create-app'
import { SERVER_PORT } from './constants'

export const createServer = () => createApp(routes).listen(SERVER_PORT)
