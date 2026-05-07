const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const { getUserStats } = require("../controllers/user.controller");

// ✅ adminOnly ki jagah restrictTo use karo
const { protect, restrictTo } = require("../middleware/auth.middleware");

router.get("/",      protect, restrictTo("Admin"), getAllUsers);
router.post("/",     protect, restrictTo("Admin"), createUser);
router.put("/:id",   protect, restrictTo("Admin"), updateUser);
router.delete("/:id",protect, restrictTo("Admin"), deleteUser);
router.get("/stats", protect, getUserStats);

module.exports = router;