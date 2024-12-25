import express from "express";
import { getProfile } from "../controllers/userController";
import { authenticate } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/profile", authenticate, getProfile);

export default router;

