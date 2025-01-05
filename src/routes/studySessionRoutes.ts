import express from "express";
import { deleteSession, getAllSessions, getSessionById, startSession, updateSession } from "../controllers/studySessionController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getAllSessions);
router.post("/", startSession);
router.get("/:sessionId", getSessionById);
router.put("/:sessionId", updateSession);
router.delete("/:sessionId", deleteSession);

export default router;