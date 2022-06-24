import request from 'supertest'
import { createApp } from '../src/app'
import { routes } from '../src/routes'

describe('Router: home', () => {
  const app = createApp(routes)

  it('should response with success on GET /api/v1', async () => {
    const { statusCode, text } = await request(app).get('/api/v1')

    expect(statusCode).toBe(200)
    expect(text).toEqual('{"data":{"params":{"apiVersion":"v1"},"query":{},"url":"/"},"message":"home"}')
  })

  it('should response with error if validation failed on POST /api/v1', async () => {
    const { statusCode, text } = await request(app).post('/api/v1')

    expect(statusCode).toBe(500)
    expect(text).toEqual('{"message":"No go"}')
  })

  it('should response with success if validation succeed on POST /api/v1', async () => {
    const { statusCode } = await request(app).post('/api/v1').send({
      message: 'go',
    })

    expect(statusCode).toBe(200)
  })

  it('should response with error on PUT /api/v1', async () => {
    const { statusCode, text } = await request(app).put('/api/v1')

    expect(statusCode).toBe(500)
    expect(text).toEqual('{"message":"No go"}')
  })
})
