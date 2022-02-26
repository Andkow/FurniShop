import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Item from "../models/itemModel.js";

// Route to fetch all items
// GET /api/items
// General (Public)
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const items = await Item.find({});

    res.json(items);
  })
);

// fetching single Item
// Route GET /api/items/:id
// access  General/Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  })
);

export default router;
