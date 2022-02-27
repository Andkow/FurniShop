import express from "express";
const router = express.Router();
import { authCust, getCustProfile } from "../controllers/custController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/login", authCust);
router.route("/profile").get(protect, getCustProfile);

export default router;
