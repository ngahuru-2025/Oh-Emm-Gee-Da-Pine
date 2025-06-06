import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useReviewId } from '../hooks/useReviews'
import { useProductId } from '../hooks/useProducts'
import request from 'superagent'

type Review = {
  id: number
  user_name: string
  rating: number
  comment: string
  product_id: number
}

type Product = {
  id: number
  name: string
}

function Review() {
  const { id } = useParams()
  const { data: reviewData, isPending } = useReviewId(Number(id))
  const { data: productData, isPending: productPending } = useProductId(
    Number(id),
  )
  console.log(productData)
  const [reviews, setReviews] = useState<Review[]>([])
  const [product, setProduct] = useState<Product | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  //  Review

  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('username')
    setUsername('Testing')
  }, [])

  if (isPending || productPending) {
    return <p>Loading...</p>
  }
  // product info
  // useEffect(() => {
  //   async function fetchProduct() {
  //     const res = await fetch(`${rootURL}/products/${id}`)
  //     const data = await res.json()
  //     setProduct(data)
  //   }
  //   fetchProduct()
  // }, [id])

  // reviews

  // Submit review
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!username) return

    const newReview = {
      title: username,
      description: comment,
      rating,
      product_id: Number(id),
    }

    try {
      const res = await request
        .post('/api/v1/reviews')
        .send(newReview)
        .set('Accept', 'application/json')

      const addedReview = res.body
      setReviews([...reviews, addedReview])
      setRating(5)
      setComment('')
    } catch (error) {
      console.error('Error submitting review:', error)
      alert('Failed to submit review')
    }
  }
  return (
    <div>
      <h2>Reviews for {productData.name}</h2>
      {reviewData.length === 0 && <p>No reviews yet.</p>}

      <ul>
        {reviewData.map((review) => (
          <li key={review.id}>
            🔹<strong>{review.title}</strong>
            <br />⭐ Rating: {review.rating}
            <br />
            💬 {review.description}
            <hr />
          </li>
        ))}
      </ul>

      {/* Only show form if logged in */}
      {username ? (
        <form onSubmit={handleSubmit}>
          <h3>Leave a Review</h3>
          <label>
            Rating:
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
            />
          </label>
          <br />
          <label>
            Comment:
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </label>
          <br />
          {/* not working */}
          <button type="submit">Submit Review </button>
        </form>
      ) : (
        <p>Please log in to leave a review.</p>
      )}
      {/* working fine  */}
      <button onClick={() => navigate('/products')}>⬅️ Back to Products</button>
    </div>
  )
}

export default Review
