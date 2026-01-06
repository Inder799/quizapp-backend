import express from "express";
const quizRouter = express.Router();
import { quizzes } from "../db/quizzes.js";

quizRouter.route("/").get((req, res) => {
  res.send(quizzes.data);
});

export default quizRouter;
