export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()

  // Inserts seed entries
  await knex('users').insert([
    {
      user_id: 1,
      username: 'DarkWard',
      password: 'Testing',
      email: 'testEmail@gmail.com',
    },
    {
      user_id: 2,
      username: 'ericsson',
      password: 'testPaswwornd',
      email: 'secondTestEmail@gmail.com',
    },
  ])
}
