import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

type Review = {
  id: number
  user_name: string
  rating: number
  comment: string
  
}

type Product = {
  id: number
  name: string
}

function Review() {
  const { id } = useParams()
  const [reviews, setReviews] = useState<Review[]>([])
  const [product, setProduct] = useState<Product | null>(null)

  // product info
  useEffect(() => { async function fetchProduct() {
      const res = await fetch(`/api/v1/products/${id}`)
      const data = await res.json()
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  // reviews
  useEffect(() => { async function fetchReviews() {
      const res = await fetch(`/api/v1/reviews/product/${id}`)
      const data = await res.json()
      setReviews(data)
    }
    fetchReviews()
  }, [id])

  return (
    <div>
      <h2>Reviews for {product?.name}</h2>
      {reviews.length === 0 && <p>No reviews yet.</p>}

      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            🔹<strong>{review.user_name}</strong><br />
            ⭐ Rating: {review.rating} <br />
            💬 {review.comment}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Review