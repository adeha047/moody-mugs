import express from 'express'
const router = express.Router()
import {getProducts, getProductById} from '../controllers/productController.js'


// Fetch all products GET /api/routes
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)


export default router