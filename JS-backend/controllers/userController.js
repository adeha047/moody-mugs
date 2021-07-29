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
});

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

export { authUser, getUserProfile };
