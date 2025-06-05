import { Router } from 'express'

import * as db from '../db/reviews.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const reviews = await db.getAllReviews()

    res.json(reviews)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
