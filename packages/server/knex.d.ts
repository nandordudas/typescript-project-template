import { Knex } from 'knex';

declare module 'knex/types/tables' {
  interface User {
    id: number
    name: string
    age: number
    created_at: string
    updated_at: string
  }

  interface Tables {
    users: User
  }

  enum TableName {
    Users = 'users',
  }
}
