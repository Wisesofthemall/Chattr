const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED".green.bold, connect.connection.host);
  } catch (error) {
    console.log("error", error);
    process.exit();
  }
};
module.exports = connectDB;
