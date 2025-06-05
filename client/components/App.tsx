import { useProducts } from '../hooks/useProducts.ts'

function App() {
  const { data } = useProducts()

  console.log(data)

  return (
    <>
      <div className="app">
        <h1 className="app-title">Fullstack Boilerplate</h1>
        <ul className="product-list">
          {data &&
            data.map((product) => (
              <li key={product.name} className="product-item">
                <div className="product-image-placeholder"></div>
                <span className="product-name">{product.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default App
