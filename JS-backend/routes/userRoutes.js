import express from 'express'
const router = express.Router()
import { authUser, getUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'


// Fetch all products GET /api/routes
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)


export default router