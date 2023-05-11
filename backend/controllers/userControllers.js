const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User Already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.query;

  const userExist = await User.findOne({ email });
  console.log(userExist);
  if (userExist && (await userExist.matchPassword(password))) {
    res.json({
      _id: userExist._id,
      name: userExist.name,
      email: userExist.email,
      pic: userExist.pic,
      token: generateToken(userExist._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports.registerUser = registerUser;
module.exports.authUser = authUser;
