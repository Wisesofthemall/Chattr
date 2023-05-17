const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    console.log("ERROR HEERE");
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    console.log("ERROR HEERE");
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
    console.log("ERROR HEERE");
    res.status(400);
    throw new Error("Failed to create user");
  }
});
const authUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  console.log("emial", req.body);
  if (email === undefined) {
    email = req.body.email;
    password = req.body.password;
  }

  const userExist = await User.findOne({ email });

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

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});
module.exports.registerUser = registerUser;
module.exports.authUser = authUser;
module.exports.allUsers = allUsers;
