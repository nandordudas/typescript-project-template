import { log } from 'node:console'
import { SERVER_PORT } from '../app/constants'

export const onServerListening = () =>
  log(`Server listening on http://localhost:${SERVER_PORT}/api`)
