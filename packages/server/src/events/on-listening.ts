import { log } from 'node:console'
import { SERVER_PORT } from '@app'

export const onServerListening = () =>
  log(`Server listening on http://localhost:${SERVER_PORT}/api`)
