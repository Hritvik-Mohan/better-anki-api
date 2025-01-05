import express from "express";
import { search } from "../controllers/searchController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/", search);

export default router;