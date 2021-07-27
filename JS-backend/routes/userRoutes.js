import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js'


// Fetch all products GET /api/routes
router.post('/login', authUser)


export default router