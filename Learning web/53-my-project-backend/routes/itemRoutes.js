import express from "express"
import { getAllItems } from "../controllers/itemController"

const itemRoutes = express.Router()

routes.get("/all-items", getAllItems)

export default itemRoutes
