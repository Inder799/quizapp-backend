import jwt from "jsonwebtoken";
import { userData } from "../db/users.js";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config();



export const signupHandler = (req, res) => {
  const { username, password } = req.body;
  // Duplicate user
  const isUserPresent = userData.users.some(
    (user) => user.username === username
  );
  if (isUserPresent) {
    res.status(422).json({ message: "User Already Exists" });
  } else {
    const id = uuid();
    const newUser = { id, username, password };
    userData.users = [...userData.users, newUser];
    const token = jwt.sign({ id: username }, process.env.SECRET_TOKEN);
    res.json({
      message: `Success - Created new User ---> ${username}::${token}`,
    });
  }
};

export const loginHandler = (req, res) => {
  const { username, password } = req.body;
  const isUserVerified = userData.users.some(
    (user) => user.username === username && user.password === password
  );
  if (isUserVerified) {
    const token = jwt.sign({ id: username }, process.env.SECRET_TOKEN);
    res.json({ username, token, message: "User Verified" });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};
