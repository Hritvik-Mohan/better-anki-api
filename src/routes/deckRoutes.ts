import express from "express";
import { createDeck, deleteDeck, getAllDecks, getDeckById, updateDeck } from "../controllers/deckController";
import { createCard, getAllCards } from "../controllers/cardController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/", getAllDecks);
router.post("/", createDeck);
router.get("/:deckId", getDeckById);
router.put("/:deckId", updateDeck);
router.delete("/:deckId", deleteDeck);
router.get("/:deckId/cards", getAllCards);
router.post("/:deckId/cards", createCard);

export default router;