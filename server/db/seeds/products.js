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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxr0WAjtLA5Xq0prAC5taQHW1wwAHIDY3qw&s',
    },
    {
      product_id: 3,
      name: 'Nicolas Cage Pillow',
      description: 'Perfection',
      price: 2000,
      image_url: 'https://m.media-amazon.com/images/I/71K7zKfIjhL._AC_.jpg',
    },
    {
      product_id: 4,
      name: 'birb',
      description: 'Birb! (I need to come up with better descriptions)',
      price: 20,
      image_url:
        'https://m.media-amazon.com/images/I/41t6SWoH-jL.__AC_SX300_SY300_QL70_ML2_.jpg',
    },
    {
      product_id: 5,
      name: 'Pine-Sol Original Multi-Surface Cleaner',
      description:
        'A 1L bottle of the powerful original scent multi-surface cleaner. Cuts through grime and deodorizes.',
      price: 8,
      image_url:
        'https://i5.walmartimages.com/seo/Pine-Sol-Multi-Surface-Cleaner-Original-48-fl-oz_7f7114f2-48f5-4821-b6f7-c39456e6edf3.d401e513608749389d1f187a1dd7ea5c.jpeg',
    },
  ])
}
