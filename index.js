import express from "express";
import { quizzes } from "./db/quizzes.js";

const app = express();
const port = 8080;

/**
 * GET
 * PUT
 * POST
 * PATCH
 * DELETE
 */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/quiz", (req, res) => {
  res.send(quizzes);
});

app.listen(port, () => {
  console.log("Listening to port 8080");
});
