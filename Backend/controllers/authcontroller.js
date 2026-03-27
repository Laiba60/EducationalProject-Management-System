import { asyncHandler } from "../middlewares/asyncHandler.js";
import { User } from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";

// Register User
export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Check empty fields
  if (!name || !email || !password || !role) {
    return next(new ErrorHandler("Please provide all fields", 400));
  }

  // Check if user already exists
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorHandler("User already exists", 400));
  }

  // Create new user
  user = await User.create({
    name,
    email,
    password,
    role,
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
});

export const loginUser = asyncHandler(async (req, res, next) => {});
export const getUser = asyncHandler(async (req, res, next) => {});
export const logout = asyncHandler(async (req, res, next) => {});
export const forgotPassword = asyncHandler(async (req, res, next) => {});
export const resetPassword = asyncHandler(async (req, res, next) => {});
  
    