import connection from './connection.ts'

type newReview = {
  user_name: string
  rating: number
  description: string
  product_id: number
}

export async function getAllReviews(db = connection) {
  return db('reviews').select()
}

export async function getReviewById(id: number, db = connection) {
  const result = await db('reviews').where({ product_id: id })
  return result
}

export async function addReview(reviewData: newReview, db = connection) {
  try {
    const [result] = await db('reviews').insert(reviewData).returning('*')

    return { id: result, ...reviewData }
  } catch (error) {
    console.error('Database error in addReview:', error)
  }
}
