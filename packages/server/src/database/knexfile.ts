import type { Knex } from 'knex'

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
    },
  },
} as Record<string, Knex.Config>
