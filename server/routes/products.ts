import { Router } from 'express'

import * as db from '../db/products.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const products = await db.getAllProducts()

    res.json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
