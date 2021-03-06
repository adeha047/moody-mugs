import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// Auth user
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.isAdmin,
      token: generateToken(user_id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
})
//Register new User 
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    const userExists = await User.findOne({ email });

    if(userExists) {
        res.status(400)
        throw new Error('User Already Exists')
    }

    const user = await User.create({ 
        name, 
        email, 
        password 
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.isAdmin,
            token: generateToken(user_id),
        })
    } else{
        res.status(400)
        throw new Error('Invalid user data')
    }
  
    
  })

// Get User Profile that's private access
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error("User Not Found");
  }
})

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if(req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.isAdmin,
      token: generateToken(updatedUser_id),
    })
  } else {
    res.status(404)
    throw new Error("User Not Found")
  }
})

export { authUser, registerUser, getUserProfile, updateUserProfile }
