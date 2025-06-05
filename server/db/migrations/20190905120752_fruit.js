export async function up(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('product_id')
    table.string('name')
    table.string('description')
    table.int('price')
    table.string('image_url')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('products')
}
