import express from "express"
import { allItems } from "../controllers/itemController.js"

const itemRoutes = express.Router()

itemRoutes.get("/all-items", allItems)

export default itemRoutes
