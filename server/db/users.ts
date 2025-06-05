import connection from './connection.ts'

export async function getAllUsers(db = connection) {
  return db('users').select()
}
