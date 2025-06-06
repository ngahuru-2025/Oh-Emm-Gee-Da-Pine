import connection from './connection.ts'

export async function getAllProducts(db = connection) {
  return db('products').select()
}

export async function getProductById(id: number, db = connection) {
  const result = await db('products').where({ product_id: id }).first()
  return result
}
