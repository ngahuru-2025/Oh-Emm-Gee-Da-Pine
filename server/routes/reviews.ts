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

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const result = await db.getReviewById(Number(id))
    res.json(result)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
router.post('/', async (req, res) => {
  try {
   const { user_name, rating, comment, product_id } = req.body
   const newReview = await db.addReview({
    user_name,
    rating,
    comment,
    product_id})
    res.json(newReview)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


export default router
