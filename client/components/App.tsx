import { useProducts } from '../hooks/useProducts.ts'

function App() {
  const { data } = useProducts()

  console.log(data)

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate</h1>
        <ul>
          {data &&
            data.map((product) => <li key={product.name}>{product.name}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
