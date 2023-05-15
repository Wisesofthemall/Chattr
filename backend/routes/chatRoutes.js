const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChat,
  createGroupChat,
  renameGroupChat,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

const chatRouter = express.Router();

chatRouter.post("/", protect, accessChat);
chatRouter.get("/", protect, fetchChat);
chatRouter.post("/group", protect, createGroupChat);
chatRouter.put("/rename", protect, renameGroupChat);
chatRouter.put("/groupremove", protect, removeFromGroup);
chatRouter.put("/groupadd", protect, addToGroup);

module.exports = chatRouter;
