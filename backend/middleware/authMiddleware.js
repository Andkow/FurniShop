import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Cust from "../models/custModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Checking for authorization token in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Splitting Bearer from the token
      token = req.headers.authorization.split(" ")[1];

      // decoding token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetching user id by using decoded token
      req.cust = await Cust.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
