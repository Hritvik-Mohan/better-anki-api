import express from "express";
import { getAllReviews, submitReview } from "../controllers/reviewController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getAllReviews);
router.get("/:cardId", submitReview);

export default router;