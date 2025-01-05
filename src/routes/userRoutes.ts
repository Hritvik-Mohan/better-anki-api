import express from "express";
import { getProfile, getUserStats, updateUserProfile } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/profile", getProfile);
router.put("/", updateUserProfile);
router.get("/stats", getUserStats)

export default router;

