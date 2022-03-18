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

// Creating/Registering a new user
// POST /api/users
// Public
const registerCust = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Checking if user exists using an email
  const custExists = await Cust.findOne({ email });

  if (custExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Creating user
  const cust = await Cust.create({
    name,
    email,
    password,
  });

  if (cust) {
    res.status(201).json({
      _id: cust._id,
      name: cust.name,
      email: cust.email,
      isAdmin: cust.isAdmin,
      token: tokenGen(cust._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid customer data");
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

//   Update user profile
//   PUT /api/users/profile
//   Private
const updateCustProfile = asyncHandler(async (req, res) => {
  const cust = await Cust.findById(req.cust._id);

  if (cust) {
    cust.name = req.body.name || cust.name;
    cust.email = req.body.email || cust.email;
    if (req.body.password) {
      cust.password = req.body.password;
    }

    const updatedCust = await cust.save();

    res.json({
      _id: updatedCust._id,
      name: updatedCust.name,
      email: updatedCust.email,
      isAdmin: updatedCust.isAdmin,
      token: generateToken(updatedCust._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { authCust, registerCust, getCustProfile, updateCustProfile };
