import connection from './connection.ts'

export async function getAllReviews(db = connection) {
  return db('reviews').select()
}
