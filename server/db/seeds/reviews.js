export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()

  // Inserts seed entries
  await knex('reviews').insert([
    {
      id: 1,
      user_id: 3,
      product_id: 4,
      rating: 5,
      title: 'I love my birb!',
      description: 'Enter description',
    },
  ])
}
