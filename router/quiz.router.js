import express from "express";
import { quizzes } from "../db/quizzes.js";

const quizRouter = express.Router();
quizRouter.route("/").get((req, res) => {
  res.send(quizzes.data);
});

export default quizRouter;
