import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import sendOtpEmail from "../services/otpTemplate.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const OTP_SECRET = process.env.OTP_SECRET;
const OTP_EXPIRY = "10m";
const TOKEN_EXPIRY = "15days";

// Helper function to generate a random OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

// Helper function to send response
const sendResponse = (res, statusCode, success, message, data = null) => {
  res.status(statusCode).json({ success, message, ...data });
};

// Create new user
export const createUser = async (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !mobile || !password) {
    return sendResponse(res, 400, false, "All fields are required.");
  }

  try {
    // Check if email already exists
    const emailInDb = await User.findOne({ email });
    if (emailInDb) {
      return sendResponse(res, 400, false, "This email is already registered.");
    }

    // Check if mobile number already exists
    const mobileInDb = await User.findOne({ mobile });
    if (mobileInDb) {
      return sendResponse(
        res,
        400,
        false,
        "This mobile number is already registered."
      );
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, mobile, password: encryptedPassword });
    await user.save();
    sendResponse(res, 201, true, "User created successfully.", { user });
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// Get a single user by ID
export const oneUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return sendResponse(res, 404, false, "User not found.");
    }
    sendResponse(res, 200, true, "User found.", { user });
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// Sign in a user
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return sendResponse(res, 400, false, "Email and password are required.");
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse(res, 404, false, "User not found.");
    }

    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) {
      return sendResponse(res, 401, false, "Incorrect password.");
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRY,
    });
    sendResponse(res, 200, true, "Login successful.", { token });
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// Send OTP for password reset
export const sendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return sendResponse(res, 400, false, "Email is required.");
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return sendResponse(res, 404, false, "Email not registered.");
    }

    const otp = generateOtp();
    const token = jwt.sign({ otp, userId: user._id }, OTP_SECRET, {
      expiresIn: OTP_EXPIRY,
    });

    // Send OTP via email
    const sendEmailCheck = sendOtpEmail(email, user.name, otp);

    if (!sendEmailCheck) {
      return sendResponse(res, 400, false, "error to send otp try again.");
    }
    return sendResponse(res, 200, true, "OTP sent successfully.", { token });
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// Verify OTP
export const verifyOtp = async (req, res) => {
  const { enteredOtp } = req.body;
  const header = req.headers.authorization;

  if (!header) {
    return sendResponse(res, 401, false, "Authorization is required.");
  }

  if (!enteredOtp) {
    return sendResponse(res, 400, false, "OTP is required.");
  }

  const token = header.split(" ")[1];

  try {
    const decode = jwt.verify(token, OTP_SECRET);
    const { otp, userId } = decode;

    if (otp != enteredOtp) {
      return sendResponse(res, 400, false, "Invalid OTP.");
    }

    const newToken = jwt.sign({ userId }, JWT_SECRET, {
      expiresIn: OTP_EXPIRY,
    });
    sendResponse(res, 200, true, "Verification successful.", {
      token: newToken,
    });
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};

// Reset password
export const forgetPassword = async (req, res) => {
  const { newPassword } = req.body;
  const header = req.headers.authorization;

  if (!header) {
    return sendResponse(res, 401, false, "Authorization is required.");
  }

  if (!newPassword) {
    return sendResponse(res, 400, false, "New password is required.");
  }

  const token = header.split(" ")[1];

  try {
    const decode = jwt.verify(token, JWT_SECRET);
    const { userId } = decode;

    const user = await User.findById(userId);
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    sendResponse(res, 200, true, "Password changed successfully.");
  } catch (error) {
    sendResponse(res, 500, false, error.message);
  }
};
