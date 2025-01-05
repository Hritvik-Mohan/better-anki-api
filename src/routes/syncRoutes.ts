import express from "express";
import { getSyncStatus, syncData } from "../controllers/syncController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getSyncStatus);
router.post("/", syncData);

export default router;