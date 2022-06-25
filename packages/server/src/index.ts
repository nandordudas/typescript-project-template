import { onServerListening } from './events'
import { createServer, createWebSocket } from './app'

const server = createServer()

createWebSocket(server)

server.addListener('listening', onServerListening)
