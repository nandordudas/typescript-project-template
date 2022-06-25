import type { Knex } from 'knex'

export const up = (knex: Knex) => knex.schema.createTable(
  'users',
  (table) => {
    table
      .increments('id')
      .primary()

    table
      .string('name')
      .nullable()
      .defaultTo(null)

    table
      .tinyint('age')
      .unsigned()
      .nullable()
      .defaultTo(null)

    table
      .dateTime('createdAt')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))

    table
      .dateTime('updatedAt')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

    table.index(['name', 'age'], 'name_age_idx')
  },
)

export const down = (knex: Knex) => knex.schema.dropTable('users')
