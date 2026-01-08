import express from "express";
import { loginHandler, signupHandler } from "../controllers/authController.js";

const loginRouter = express.Router();
const signUpRouter = express.Router();

loginRouter.route("/").post(loginHandler);
signUpRouter.route("/").post(signupHandler);

export { loginRouter, signUpRouter };
