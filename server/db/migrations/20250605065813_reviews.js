export async function up(knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id')
    table.int('user_id')
    table.int('product_id')
    table.int('rating')
    table.string('title')
    table.string('description')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('reviews')
}
