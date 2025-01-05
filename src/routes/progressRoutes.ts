import express from "express";
import { getUserProgressForAllDecks, getUserProgressForDeck, resetUserProgressForDeck, updateUserProgressForCard } from "../controllers/progressController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware);

router.get("/deck/:deckId", getUserProgressForDeck);
router.get("/all", getUserProgressForAllDecks);
router.get("/card/:cardId", updateUserProgressForCard);
router.get("/deck/:deckId/reset", resetUserProgressForDeck);

export default router;