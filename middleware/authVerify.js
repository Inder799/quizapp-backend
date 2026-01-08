import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Creating a middleware to verify the token
export const authVerify = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = { userId: decodedToken.id };
    return next();
  } catch (err) {
    console.log({ message: `Error from server ${JSON.stringify(err)}` });
  }
};
