import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (request, response) => {
  const { name, email, mobile } = request.body;
  const encryptMobile = await bcrypt.hash(mobile, 10);
  console.log(encryptMobile);

  const user = new User({
    name,
    email,
    mobile,
  });
  await user.save();
  response.send({ success: true, message: "user created." , user});
};

export const allUser = async (request, response) => {
  const users = await User.find();
  response.send({ success: true, users});
};

export const user = async (request, response) => {
  const userId = request.params.userId;
  const user = await User.findById(userId);
  response.send({success: true, user});
};

export const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findByIdAndUpdate(userId, req.body);
  res.send({ success: true, message: "update success." , user});
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  await User.findByIdAndDelete(userId);
  res.send({ success: true });
};


