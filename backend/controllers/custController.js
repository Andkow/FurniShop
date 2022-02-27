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

// Get user profile
// GET /api/users/profile
// Private
const getCustProfile = asyncHandler(async (req, res) => {
  // Finding user by id
  const cust = await Cust.findById(req.cust._id);

  if (cust) {
    res.json({
      _id: cust._id,
      name: cust.name,
      email: cust.email,
      isAdmin: cust.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Customer not found");
  }
});

export { authCust, getCustProfile };
