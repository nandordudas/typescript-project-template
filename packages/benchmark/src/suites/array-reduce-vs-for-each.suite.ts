import { add, complete, cycle, suite } from 'benny'

const items = Array.from({ length: 1e3 }, (_, i) => i)

export default suite(
  'Array reduce vs. forEach',
  add('Array reduce', () => {
    items.reduce((previousValue, currentValue) => ({
      ...previousValue,
      [currentValue]: currentValue,
    }), {})
  }),
  add('Array forEach', () => {
    const result: Record<number, number> = {}

    items.forEach(item => result[item] = item)
  }),
  cycle(),
  complete(),
)
