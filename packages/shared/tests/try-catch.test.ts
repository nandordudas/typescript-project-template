import { tryCatch } from '@core/try-catch'

const onError = vi.fn()
const onResult = vi.fn()

describe('try-catch', () => {
  const errorInstance = new Error('failed')

  it('should return proper values from resolved promise', async () => {
    const { data, error } = await tryCatch(Promise.resolve('success'))

    expect(data).toBe('success')
    expect(error).toBeNull()
  })

  it('should return proper values from rejected promise', async () => {
    const { data, error } = await tryCatch(Promise.reject(errorInstance))

    expect(error?.message).toEqual('failed')
    expect(data).toBeNull()
  })

  it('should use function on succeed run', async () => {
    await tryCatch(Promise.resolve('success'), undefined, onResult)

    expect(onResult).toHaveBeenCalled()
    expect(onResult).toHaveBeenCalledWith('success')
  })

  it('should use function on failed run', async () => {
    await tryCatch(Promise.reject(errorInstance), onError)

    expect(onError).toHaveBeenCalled()
    expect(onError).toHaveBeenCalledWith(errorInstance)
  })
})
