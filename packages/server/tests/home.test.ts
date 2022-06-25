import httpRequest from 'supertest'
import wsRequest from 'superwstest'
import { createApp, createServer, createWebSocket } from '@app'
import { routes } from '@routes'

const app = createApp(routes)
const httpServer = createServer(app)
const webSocketServer = createWebSocket(httpServer)

const onWebSocketConnection = vi.fn()

describe('Router: home', () => {
  beforeEach(() => {
    webSocketServer.addListener('connection', onWebSocketConnection)
  })

  afterEach(() => {
    wsRequest.closeAll()
  })

  it('should response with success on GET /api/v1', async () => {
    const { statusCode, text } = await httpRequest(app).get('/api/v1')

    expect(statusCode).toBe(200)
    expect(text).toEqual('{"data":{"params":{"apiVersion":"v1"},"query":{},"url":"/"},"message":"home"}')
  })

  it('should response with error if validation failed on POST /api/v1', async () => {
    const { statusCode, text } = await httpRequest(app).post('/api/v1')

    expect(statusCode).toBe(500)
    expect(text).toEqual('{"message":"No go"}')
  })

  it('should response with success if validation succeed on POST /api/v1', async () => {
    const { statusCode } = await httpRequest(app).post('/api/v1').send({
      message: 'go',
    })

    expect(statusCode).toBe(200)
  })

  it('should response with error on PUT /api/v1', async () => {
    const { statusCode, text } = await httpRequest(app).put('/api/v1')

    expect(statusCode).toBe(500)
    expect(text).toEqual('{"message":"No go"}')
  })

  it('should connect to websocket properly', async () => {
    const response = await wsRequest(httpServer).ws('/api/v1')

    expect(response.url).toBe('ws://127.0.0.1:3333/api/v1')
    expect(onWebSocketConnection).toBeCalled()
  })
})
