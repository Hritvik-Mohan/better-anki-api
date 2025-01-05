import express from "express";
import { getAllReviews, submitReview } from "../controllers/reviewController";

const router = express.Router();

router.get("/", getAllReviews);
router.get("/:cardId", submitReview);

export default router;