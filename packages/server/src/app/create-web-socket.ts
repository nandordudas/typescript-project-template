import { log } from 'node:console'
import type { IncomingMessage, Server } from 'node:http'
import WebSocket from 'ws'

const onConnection = (
  connection: WebSocket.WebSocket,
  request: IncomingMessage,
) => {
  log(request.url)

  connection.on('message', (message) => {
    log(message)
    connection.send(JSON.stringify({
      message: 'There be gold in them thar hills.',
    }))
  })
}

export const createWebSocket = (server: Server) => {
  const websocketServer = new WebSocket.Server({
    path: '/api/v1',
    server,
  })

  websocketServer.on('connection', onConnection)

  return websocketServer
}
