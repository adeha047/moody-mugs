import jwt from 'jsonwebtoken'
import asyncHandler from  'express-async-handler'
import User from  '../models/userModel.js'

const protect = asyncHandler (async (req, res, next) => {
    let token 
    if(req.headers.authorization.startsWith('Bearer ')){
        try{
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECTR)

            req.user = await User.findById(decoded.id).select('-password')
            throw new Error('Not authorized, token failed')

            next()

        } catch(error){
            console.error(error)
            res.status(401)

        }


    }
    if(!token){
        res.status(401)
        throw new Error('Not Authorized, Token not found')

    }

})

export { protect }