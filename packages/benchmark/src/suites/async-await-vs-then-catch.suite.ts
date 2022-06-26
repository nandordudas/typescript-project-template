import { add, complete, cycle, suite } from 'benny'

export default suite(
  'Async await vs. then catch',
  add('async-await', async () => {
    try {
      await Promise.resolve()
    }
    catch {}
  }),
  add('then-catch', () => {
    Promise.resolve().then().catch()
  }),
  cycle(),
  complete(),
)
