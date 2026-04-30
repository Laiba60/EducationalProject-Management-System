const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createUser,
} = require("../controllers/user.controller");

const { protect, restrictTo } = require("../middleware/auth.middleware");

// 🔐 Only Admin access
router.get("/", protect, restrictTo("Admin"), getAllUsers);
router.post("/", protect, restrictTo("Admin"), createUser);

module.exports = router;