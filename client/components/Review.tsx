import { useParams, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'

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
  const [reviews, setReviews] = useState<Review[]>([])
  const [product, setProduct] = useState<Product | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('username')
    setUsername(user)
  }, [])

  // product info
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/v1/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  // reviews
  useEffect(() => {
    async function fetchReviews() {
      const res = await fetch(`/api/v1/reviews/product/${id}`)
      const data = await res.json()
      setReviews(data)
    }
    fetchReviews()
  }, [id])

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
      // back to products page after submit 
      // navigate('/products')
  } else {
    alert('Failed to submit review')
  }
}
    

  return (
    <div>
      <h2>Reviews for {product?.name}</h2>
      {reviews.length === 0 && <p>No reviews yet.</p>}

      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            🔹<strong>{review.user_name}</strong>
            <br />
            ⭐ Rating: {review.rating}
            <br />
            💬 {review.comment}
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