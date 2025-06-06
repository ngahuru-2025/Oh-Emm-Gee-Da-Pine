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
      username: 'Ericsson',
      password: 'testPaswwornd',
      email: 'secondTestEmail@gmail.com',
    },
    {
      user_id: 3,
      username: 'Lane',
      password: 'whyYouLooking?',
      email: 'lpearcemetcalfe@gmail.com',
    },
    {
      user_id: 4,
      username: 'NovaSky',
      password: 'skyHigh123',
      email: 'nova.sky@gmail.com',
    },
    {
      user_id: 5,
      username: 'PixelCraze',
      password: 'p@ssw0rd!',
      email: 'pixel.craze@email.com',
    },
    {
      user_id: 6,
      username: 'TechieTom',
      password: 'TomTech42',
      email: 'tech.tom@gmail.com',
    },
    {
      user_id: 7,
      username: 'JazzHands',
      password: 'jazzBeats!',
      email: 'hands.jazz@gmail.com',
    },
    {
      user_id: 8,
      username: 'SunsetRider',
      password: 'sunRide!234',
      email: 'sunset.rider@mail.com',
    },
    {
      user_id: 9,
      username: 'CodeWizard',
      password: 'magicCode123',
      email: 'wizard.code@devmail.com',
    },
    {
      user_id: 10,
      username: 'GamerGirl99',
      password: 'ggWP2021',
      email: 'gamer.girl99@hotmail.com',
    },
    {
      user_id: 11,
      username: 'MrRobot',
      password: 'fsociety!',
      email: 'elliot@robotmail.com',
    },
    {
      user_id: 12,
      username: 'BetaTester',
      password: 'alpha2beta',
      email: 'beta@testmail.org',
    },
    {
      user_id: 13,
      username: 'ChocoLatte',
      password: 'sweetTooth!',
      email: 'latte.choco@email.com',
    },
    {
      user_id: 14,
      username: 'SonicBoom',
      password: 'fastestAlive!',
      email: 'sonic@boom.com',
    },
    {
      user_id: 15,
      username: 'NightHawk',
      password: 'darkWing42',
      email: 'nighthawk@owlmail.net',
    },
  ])
}
