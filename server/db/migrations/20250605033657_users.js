export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('user_id')
    table.string('username')
    table.string('password')
    table.string('email')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('users')
}
