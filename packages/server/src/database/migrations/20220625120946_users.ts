import type { Knex } from 'knex'
import { TableName } from 'knex/types/tables'

export const up = (knex: Knex) => knex.schema.createTable(
  TableName.Users,
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
      .dateTime('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))

    table
      .dateTime('updated_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

    table.index(['name', 'age'], 'name_age_idx')
  },
)

export const down = (knex: Knex) => knex.schema.dropTable(TableName.Users)
