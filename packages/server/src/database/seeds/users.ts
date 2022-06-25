import type { Knex } from 'knex'
import type { User } from '../types'

const data: Knex.DbRecordArr<User> = [
  { age: 7, name: 'Snowflake' },
  { age: 32, name: 'Nándor Dudás' },
]

export const seed = async (knex: Knex) => {
  const queryBuilder = knex<User>('users')

  await queryBuilder.del()
  await queryBuilder.insert(data)
}
