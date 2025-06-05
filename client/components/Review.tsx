import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useReviewId } from '../hooks/useReviews'

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
  const [reviews, setReviews] = useState<Review[]>([])
  const [product, setProduct] = useState<Product | null>(null)

  //  Track login
  const [username, setUsername] = useState<string | null>(null)

  //  Review
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')

  useEffect(() => {
    const user = localStorage.getItem('username')
    setUsername(user)
  }, [])

  if (isPending) {
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
      user_name: username,
      rating,
      comment,
      product_id: Number(id),
    }

    const res = await fetch('/api/v1/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newReview),
    })

    if (res.ok) {
      const addedReview = await res.json()
      setReviews([...reviews, addedReview])
      setRating(5)
      setComment('')
    }
  }

  return (
    <div>
      <h2>Reviews for {product?.name}</h2>
      {reviews.length === 0 && <p>No reviews yet.</p>}

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
          <button type="submit">Submit Review</button>
        </form>
      ) : (
        <p>Please log in to leave a review.</p>
      )}
    </div>
  )
}

export default Review
