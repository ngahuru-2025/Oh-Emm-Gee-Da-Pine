import { useProducts } from '../hooks/useProducts'
import { useReviews } from '../hooks/useReviews'
import { useUsers } from '../hooks/useUsers'
import { Link } from 'react-router' 


type Review = {
  id: number
  user_name: string
  rating: number
  comment: string
  product_id: number
}


function App() {
  const { data: products } = useProducts()
  const { data: reviews } = useReviews() as { data: Review}
  const { data: users } = useUsers()

  function getReviewsForProduct(productId: number) {
    if (!reviews) return []
    return reviews.filter((review) => review.product_id === productId)
  }

  function getAverageRating(productId: number) {
    const productReviews = getReviewsForProduct(productId)
    if (productReviews.length === 0) return null

    const total = productReviews.reduce((sum: number, review: Review) => sum + review.rating, 0) // avarage star rate 
    const average = total / productReviews.length
    return average
  }

  return (
    <div className="app">
      <h1 className="app-title">Product Reviews</h1>
      <ul className="product-list">
        {products?.map((product) => {
          const productReviews = getReviewsForProduct(product.product_id)
          const avg = getAverageRating(product.product_id)

          return (
            <li key={product.product_id} className="product-item">
              <div className="product-image-placeholder"></div>
              <span className="product-name">{product.name}</span>
              {productReviews.length > 0 ? (
                <p>⭐ {avg} ({productReviews.length} reviews)</p>
              ) : (
                <p>No reviews yet</p>
              )}
              <Link to={`/reviews/${product.product_id}`}>See reviews</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App