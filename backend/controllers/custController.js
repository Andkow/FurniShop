import asyncHandler from "express-async-handler";
import tokenGen from "../utilities/tokenGen.js";
import Cust from "../models/custModel.js";

// Authenticating customers & getting token
// POST /api/users/login
// Public
const authCust = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Checking for user using an email
  const cust = await Cust.findOne({ email });

  // Matching password of the user
  if (cust && (await cust.matchPassword(password))) {
    res.json({
      _id: cust._id,
      name: cust.name,
      email: cust.email,
      isAdmin: cust.isAdmin,
      token: tokenGen(cust._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { authCust };
