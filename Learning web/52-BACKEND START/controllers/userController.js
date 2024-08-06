import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const encryptPass = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      mobile,
      password: encryptPass,
    });
    await user.save();
    res.status(201).json({ success: true, message: "User created.", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all users
export const allUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

// Get a single user by ID
export const user = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a user by ID
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }
    res
      .status(200)
      .json({ success: true, message: "Update successful.", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }
    res.status(200).json({ success: true, message: "User deleted." });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Sign in a user
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password.",
      });
    }

    const token = jwt.sign({ userId: user._id}, 'secret', { expiresIn: '1h' });

    return res
      .status(200)
      .json({ success: true, message: "Login successful." , token});
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//protected route
export const protectedRoute = (req, res) => {
  res.json({success:true, message: "this is protected route."})
}
