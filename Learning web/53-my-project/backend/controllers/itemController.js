import Item from "../models/itemModel.js";

//get all items
export const allItems = async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json({ success: true, items });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};
