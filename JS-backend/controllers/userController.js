import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// Auth user
const authUser = asyncHandler(async(req, res) => {
const {email, password} = req.body

const user = await User.findOne({email})

if(user) {

}
})

export { authUser }