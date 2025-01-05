import express from "express";

import { deleteCard, getCardById, updateCard } from "../controllers/cardController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/:cardId", getCardById);
router.put("/:cardId", updateCard);
router.delete("/:cardId", deleteCard);

export default router;