import express from "express";
import {
  createUser,
  forgetPassword,
  oneUser,
  sendOtp,
  signIn,
  verifyOtp,
} from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/register", createUser);
userRoutes.get("/:userId", oneUser)
userRoutes.post("/sign-in", signIn);
userRoutes.post("/send-otp", sendOtp);
userRoutes.post("/verify-otp", verifyOtp);
userRoutes.post("/forget-password", forgetPassword);

export default userRoutes;
