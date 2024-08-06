import Item from "../models/itemModel.js";

export const getAllItems = async (req, res) => {
    try {
       const allItems = await Item.find() 
       res.send(allItems)
    } catch (error) {
        console.log(error)
    }
}