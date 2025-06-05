export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('products').del()

  // Inserts seed entries
  await knex('products').insert([
    {
      product_id: 1,
      name: 'Logitech G203',
      description: 'Cool gaming mouse.',
      price: 33,
      image_url:
        'https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SX679_.jpg',
    },
  ])
}
