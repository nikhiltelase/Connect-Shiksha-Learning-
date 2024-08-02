import express from "express"
import { createUser, allUser, user } from "../functions/userFunctions.js";

const routes = express.Router()

routes.post("/create", createUser);
routes.get("/read", allUser)
routes.get("/:userId", user)

export default routes