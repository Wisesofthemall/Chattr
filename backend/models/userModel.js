const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: false,
      default:
        "https://projectable.org/wp-content/uploads/2017/01/default-avatar_male.png",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userModel);

module.exports = User;
