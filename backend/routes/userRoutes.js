const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");

const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.get("/login", authUser);
router.get("/", protect, allUsers);

module.exports = router;
