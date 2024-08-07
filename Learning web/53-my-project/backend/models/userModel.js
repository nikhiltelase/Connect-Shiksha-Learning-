import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  password: String,
  cart: Array,
  wishlist: Array,
});

const User = mongoose.model("User", userSchema);
export default User;
