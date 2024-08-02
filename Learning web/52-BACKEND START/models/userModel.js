import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
});

const User = mongoose.model("User", userSchema);
export default User;
