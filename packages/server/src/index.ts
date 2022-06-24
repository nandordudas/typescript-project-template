import { onServerListening } from './events'
import { createServer } from './app'

const server = createServer()

server.addListener('listening', onServerListening)
