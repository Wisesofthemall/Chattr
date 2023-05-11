const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const chats = require("./data/data.js");
const colors = require("colors");
const router = require("./routes/userRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const app = express();
dotenv.config();
connectDB();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());

app.use("/api/user", router);

app.use(notFound);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Website on port 3000".yellow.bold);
});
