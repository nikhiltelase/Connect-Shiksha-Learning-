import express from "express";
import {
  createUser,
  forgetPassword,
  currentUser,
  sendOtp,
  signIn,
  verifyOtp,
} from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/register", createUser);
userRoutes.get("/currentUser", currentUser)
userRoutes.post("/login", signIn);
userRoutes.post("/send-otp", sendOtp);
userRoutes.post("/verify-otp", verifyOtp);
userRoutes.post("/forget-password", forgetPassword);

export default userRoutes;
