import express from "express";

import { deleteCard, getCardById, updateCard } from "../controllers/cardController";

const router = express.Router();

router.get("/:cardId", getCardById);
router.put("/:cardId", updateCard);
router.delete("/:cardId", deleteCard);

export default router;