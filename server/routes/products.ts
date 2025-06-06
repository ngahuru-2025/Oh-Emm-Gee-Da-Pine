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

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = await db.getProductById(Number(id))
    res.json(result)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
