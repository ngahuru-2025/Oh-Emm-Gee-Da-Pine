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
    {
      product_id: 2,
      name: 'Keychron K2 Mechanical Keyboard',
      description:
        'Compact 75% layout, Gateron Brown switches, and RGB backlight.',
      price: 120,
      image_url:
        'https://cdn.shopify.com/s/files/1/0059/0656/3943/products/Keychron-K2-Wireless-Mechanical-Keyboard-for-Mac-Windows-Linux-RGB-Backlight-Aluminum-Frame-Version-Typing-Angle_1200x.jpg',
    },
  ])
}
