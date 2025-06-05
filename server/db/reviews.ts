import connection from './connection.ts'

export async function getAllReviews(db = connection) {
  return db('reviews').select()
}

export async function getReviewById(id: number, db = connection) {
  const result = await db('reviews').where({ product_id: id })
  return result
}
