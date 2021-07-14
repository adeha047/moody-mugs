import express from 'express'
import asyncHandler from 'expressAsyncHandler'
const router = express.Router()
import Product from '../models/productModel.js'


// Fetch all products GET /api/routes
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products);

}))
// Fetch one products GET /api/routes
router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    
    if(product) {
        res.json(product)
    } else {
        res.status(404).json({message: 'Product not found'})
    }

}))

export default router