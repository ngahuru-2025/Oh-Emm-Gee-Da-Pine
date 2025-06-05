import connection from './connection.ts'

export async function getAllUsers(db = connection) {
  return db('users').select()
}

export async function getUserById(id: number, db = connection) {
  const result = await db('users').where({ user_id: id })
  return result
}
