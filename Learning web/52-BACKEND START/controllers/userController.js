import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (request, response) => {
  try {
    const { name, email, mobile } = request.body;
    const encryptMobile = await bcrypt.hash(mobile, 10);
    console.log(encryptMobile);

    const user = new User({
      name,
      email,
      mobile,
    });
    await user.save();
    response.json({ success: true, message: "user created.", user });
  } catch (error) {
    response.status(500).json({ message: err.message });
  }
};

export const allUser = async (request, response) => {
  const users = await User.find();
  response.json({ success: true, users });
};

export const user = async (request, response) => {
  const userId = request.params.userId;
  const user = await User.findById(userId);
  response.json({ success: true, user });
};

export const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findByIdAndUpdate(userId, req.body);
  res.json({ success: true, message: "update success.", user });
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  await User.findByIdAndDelete(userId);
  res.json({ success: true });
};
