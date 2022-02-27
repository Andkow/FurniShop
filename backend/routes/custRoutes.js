import express from "express";
const router = express.Router();
import {
  authCust,
  getCustProfile,
  registerCust,
} from "../controllers/custController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerCust);
router.post("/login", authCust);
router.route("/profile").get(protect, getCustProfile);

export default router;
