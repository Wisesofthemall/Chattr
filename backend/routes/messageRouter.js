const express = require("express");
const { sendMessage, allMessage } = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");

const messageRouter = express.Router();

messageRouter.post("/", protect, sendMessage);
messageRouter.get("/:chatId", protect, allMessage);

module.exports = messageRouter;
