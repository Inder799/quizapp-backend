import express from "express";
import { loginHandler } from "../controllers/authController.js";

const loginRouter = express.Router();

loginRouter.route("").post(loginHandler);

export default loginRouter;
