import express from "express";
import { getUserProgressForAllDecks, getUserProgressForDeck, resetUserProgressForDeck, updateUserProgressForCard } from "../controllers/progressController";

const router = express.Router();

router.get("/deck/:deckId", getUserProgressForDeck);
router.get("/all", getUserProgressForAllDecks);
router.get("/card/:cardId", updateUserProgressForCard);
router.get("/deck/:deckId/reset", resetUserProgressForDeck);

export default router;