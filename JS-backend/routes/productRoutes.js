import express from 'express'
import expressAsyncHandler from 'expressAsyncHandler'
const router = express.Router()
import Product from '../models/productModel'



router.get('/', async (req, res) => {
    const products = await Product.find({})
    res.json(products);

})

router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id)
    res.json(product);

})

export default router