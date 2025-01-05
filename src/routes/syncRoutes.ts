import express from "express";
import { getSyncStatus, syncData } from "../controllers/syncController";

const router = express.Router();

router.get("/", getSyncStatus);
router.post("/", syncData);

export default router;