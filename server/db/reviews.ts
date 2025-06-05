import Review from '../../client/components/Review.tsx'
import connection from './connection.ts'
type newReview = { 
user_name: string
rating: number
comment: string
product_id: number
}

export async function getAllReviews(db = connection) {
  return db('reviews').select()
}

export async function getReviewById(id: number, db = connection) {
  const result = await db('reviews').where({ product_id: id })
  return result
}

export async function addReview
  (reviewData: newReview, db = connection) { 
    const [id] = await db('reviews').insert(reviewData)
    return {id, ...reviewData}
}
