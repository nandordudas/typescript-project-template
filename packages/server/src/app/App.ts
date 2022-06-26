import type { IncomingMessage, Server } from 'node:http'
import { log } from 'node:console'
import express from 'express'
import type { Express, RequestHandler } from 'express'
import { WebSocketServer } from 'ws'
import { middlewares } from '@middlewares'
import type { Nullable } from '@types'
import { services } from '@services'
import { SERVER_PORT } from './constants'

export class App {
  #app: Nullable<Express> = null
  #server: Nullable<Server> = null
  #webSocketServer: Nullable<WebSocketServer> = null

  static #instance: Nullable<App> = null

  static getInstance = () =>
    this.#instance ??= new App()

  start = () => {
    this.#createApp()

    if (!this.#app)
      throw new Error('App is not created')

    this.#createServer(this.#app)

    if (!this.#server)
      throw new Error('Server is not created')

    this.#createWebSocketServer(this.#server)
    this.#server.addListener('listening', this.#onWebSocketServerListening)
  }

  getApp = () => this.#app
  getServer = () => this.#server
  getWebSocketServer = () => this.#webSocketServer

  #createApp = () => {
    const path = '/api/:apiVersion/:serviceName/:methodName?'
    const app = express()

    const requestMethodMap: Record<string, string> = {
      DELETE: 'delete',
      GET: 'select',
      PATCH: 'update',
      POST: 'create',
    }

    const serviceMiddleware: RequestHandler = (request, response, next) => {
      const { body, method, params, query, url } = request
      const { apiVersion, methodName, serviceName } = params

      if (!serviceName)
        return next(new Error('Service name is not defined'))

      const serviceInstance = services[serviceName]?.make()

      if (!serviceInstance)
        return next(new Error('Service is not defined'))

      const serviceMethod = requestMethodMap[method] as keyof typeof serviceInstance

      if (!serviceMethod || !(serviceMethod in serviceInstance))
        return next(new Error('Method is not defined'))

      response.status(200).json({
        result: serviceInstance[serviceMethod]({
          body,
          method: requestMethodMap[method],
          apiVersion,
          methodName,
          serviceName,
          query,
          url,
        }),
      })
    }

    app.use(path, middlewares.pre, serviceMiddleware, middlewares.post)

    return this.#app = app
  }

  #createServer = (app: Express) =>
    this.#server = app.listen(SERVER_PORT, 'localhost')

  #createWebSocketServer = (server: Server) =>
    this.#webSocketServer = this.#createWebSocket(server)

  #onWebSocketServerListening = () =>
    log(`Server listening on http://localhost:${SERVER_PORT}/api`)

  #createWebSocket = (server: Server) => {
    const webSocketServer = new WebSocketServer({
      path: '/api/v1',
      server,
    })

    webSocketServer.addListener('connection', this.#onWebSocketConnection)

    return webSocketServer
  }

  #onWebSocketConnection = (websocket: WebSocket, request: IncomingMessage) => {
    log(request.url)

    websocket.addEventListener('message', () => {
      websocket.send(JSON.stringify({ message: 'pong' }))
    })

    websocket.send(JSON.stringify({ message: 'connected' }))
  }
}
