import { log } from 'node:console'
import type { Server as HttpServer } from 'node:http'
import { Server as WebSocketServer } from 'ws'

export const createWebSocket = (server: HttpServer) => {
  const websocketServer = new WebSocketServer({
    noServer: true,
    path: '/api/v1',
  })

  server.on('upgrade', (request, socket, head) => {
    websocketServer.handleUpgrade(request, socket, head, (websocket) => {
      websocketServer.emit('connection', websocket, request)
    })
  })

  websocketServer.on('connection', (connection, request) => {
    log(request.url)

    connection.on('message', (message) => {
      log(message)
      connection.send(JSON.stringify({
        message: 'There be gold in them thar hills.',
      }))
    })
  })

  return websocketServer
}
