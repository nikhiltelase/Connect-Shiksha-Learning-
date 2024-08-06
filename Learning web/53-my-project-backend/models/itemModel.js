import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  imgUrls: Array,
  category: String,
  description: String,
  specification: String,
  reviews: Array,
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
