import { add, complete, cycle, suite } from 'benny'

const arrayDestructor = (left = '', right = '') => [left, right]
const objectDestructor = (left = '', right = '') => ({ left, right })

export default suite(
  'Destructured return array vs. object',
  add('Array', () => {
    arrayDestructor()
  }),
  add('Object', () => {
    objectDestructor()
  }),
  cycle(),
  complete(),
)
