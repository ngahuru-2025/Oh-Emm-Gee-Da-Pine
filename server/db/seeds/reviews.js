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
    {
      id: 2,
      user_id: 2,
      product_id: 4,
      rating: 4,
      title: 'A test title',
      description: 'Anbd A test description!',
    },
  ])
}
