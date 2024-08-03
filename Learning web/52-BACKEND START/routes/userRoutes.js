import express from "express"
import { createUser, allUser, user, updateUser, deleteUser } from "../controllers/userController.js";

const routes = express.Router()

routes.post("/create", createUser);
routes.get("/read-all", allUser)
routes.get("/read/:userId", user)
routes.put("/update/:userId", updateUser)
routes.delete("/delete/:userId", deleteUser)

export default routes