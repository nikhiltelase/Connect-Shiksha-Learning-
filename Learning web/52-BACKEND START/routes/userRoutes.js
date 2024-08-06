import express from "express";
import {
  createUser,
  allUser,
  user,
  updateUser,
  deleteUser,
  signIn,
  protectedRoute,
} from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";

const routes = express.Router();

routes.post("/create", createUser);
routes.get("/read-all", allUser);
routes.get("/read/:userId", user);
routes.put("/update/:userId", updateUser);
routes.delete("/delete/:userId", deleteUser);
routes.post("/sign-in", signIn);
routes.get("/protected", authenticateUser, protectedRoute);
export default routes;
