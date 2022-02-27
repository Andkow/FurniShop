import express from "express";
const router = express.Router();
import { authCust } from "../controllers/custController.js";

router.post("/login", authCust);

export default router;
