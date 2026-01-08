import express from "express";
import cors from "cors";
import quizRouter from "./router/quiz.router.js";
import loginRouter from "./router/auth.router.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;

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

app.use("/auth/login", loginRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log("Server started....");
});
