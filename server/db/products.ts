import connection from './connection.ts'

export async function getAllProducts(db = connection) {
  return db('products').select()
}
