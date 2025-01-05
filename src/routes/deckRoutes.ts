import express from "express";
import { createDeck, deleteDeck, getAllDecks, getDeckById, updateDeck } from "../controllers/deckController";

const router = express.Router();

router.get("/deck", getAllDecks);
router.post("/deck", createDeck);
router.get("/deck/:deckId", getDeckById);
router.put("/deck/:deckId", updateDeck);
router.delete("/deck/:deckId", deleteDeck);

export default router;