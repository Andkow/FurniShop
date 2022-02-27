import asyncHandler from "express-async-handler";
import Item from "../models/itemModel.js";

// Route to fetch all items
// GET /api/items
// General (Public)
const getItems = asyncHandler(async (req, res) => {
  const items = await Item.find({});

  res.json(items);
});

// fetching single Item
// Route GET /api/items/:id
// access  General/Public
const getItemById = asyncHandler(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (item) {
    res.json(item);
  } else {
    res.status(404);
    throw new Error("Item not found");
  }
});

export { getItems, getItemById };
