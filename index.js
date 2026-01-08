import express from "express";
import cors from "cors";
import quizRouter from "./router/quiz.router.js";
import { userData } from "./db/users.js";

const app = express();
app.use(cors());
app.use(express.json());

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

app.use("/quiz", quizRouter);

app.post("/auth/login", (req, res) => {
  const { username, password } = req.body;
  const isUserVerified = userData.users.some(
    (user) => user.username === username && user.password === password
  );
  if (isUserVerified) {
    res.json({ message: "User Verified" });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
});

app.listen(port, () => {
  console.log("Listening to port 8080");
});
