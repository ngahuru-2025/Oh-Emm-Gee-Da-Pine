import { useProducts } from '../hooks/useProducts.ts'
import { useUsers } from '../hooks/useUsers.ts'

function App() {
  const { data } = useProducts()
  const { data: userdata } = useUsers()

  console.log(userdata)

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
