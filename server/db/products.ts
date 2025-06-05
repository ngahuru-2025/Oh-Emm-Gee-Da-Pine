import connection from './connection.ts'
import { Fruit } from '../../models/fruit.ts'

export async function getAllProducts(db = connection): Promise<Fruit[]> {
  return db('products').select()
}
