// Review.tsx
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Types
type Review = {
  id: number
  rating: number
  comment: string
  user_name: string
}

type Product = {
  id: number
  name: string
}

function Review() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])

  // Get product info
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/v1/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  // Get reviews
  useEffect(() => {
    async function fetchReviews() {
      const res = await fetch(`/api/v1/reviews/product/${id}`)
      const data = await res.json()
      setReviews(data)
    }
    fetchReviews()
  }, [id])

  return (
    <div>
      <h2>Reviews for {product ? product.name : 'Loading...'}</h2>

      {reviews.length === 0 && <p>No reviews yet.</p>}

      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.user_name}</strong><br />
            ⭐ Rating: {review.rating} <br />
            💬 "{review.comment}"
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Review