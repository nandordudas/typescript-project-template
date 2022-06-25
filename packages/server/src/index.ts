import { onServerListening } from './events'
import { createApp, createServer, createWebSocket } from './app'
import { routes } from './routes'

const app = createApp(routes)
const server = createServer(app)

createWebSocket(server)

server.addListener('listening', onServerListening)
