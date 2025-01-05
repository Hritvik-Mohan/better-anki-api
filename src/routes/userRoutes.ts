import express from "express";
import { getProfile, getUserStats, updateUserProfile } from "../controllers/userController";

const router = express.Router();

router.get("/profile", getProfile);
router.put("/", updateUserProfile);
router.get("/stats", getUserStats)

export default router;

