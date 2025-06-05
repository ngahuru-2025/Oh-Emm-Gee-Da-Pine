import { Router } from 'express'

import * as db from '../db/users.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getAllUsers()

    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await db.getUserById(Number(id))
    res.json(user)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
