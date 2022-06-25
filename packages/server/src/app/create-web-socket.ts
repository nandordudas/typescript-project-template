import { log } from 'node:console'
import type { IncomingMessage, Server } from 'node:http'
import WebSocket from 'ws'

const onConnection = (
  connection: WebSocket.WebSocket,
  request: IncomingMessage,
) => {
  log(request.url)

  connection.addEventListener('message', () => {
    connection.send(JSON.stringify({ message: 'pong' }))
  })
}

export const createWebSocket = (server: Server) => {
  const websocketServer = new WebSocket.Server({
    path: '/api/v1',
    server,
  })

  websocketServer.addListener('connection', onConnection)

  return websocketServer
}
