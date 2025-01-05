import express from "express";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import deckRoutes from "./routes/deckRoutes";
import cardRoutes from "./routes/cardRoutes";
import studySessionRoutes from "./routes/studySessionRoutes";
import reviewAndProgressRoutes from "./routes/reviewAndProgressRoutes";
import syncRoutes from "./routes/syncRoutes";
import searchRoutes from "./routes/searchRoutes";

const app = express();
app.use(express.json());

// Authentication
app.use("/api/auth", authRoutes);

// User Management
app.use("/api/user", userRoutes);

// Decks
app.use("/api/decks", deckRoutes);

// Cards
app.use("/api/cards", cardRoutes);

//Study Sessions
app.use("/api/study/session", studySessionRoutes);

// Review and Progress
app.use("/api/review", reviewAndProgressRoutes);
app.use("/api/progress", reviewAndProgressRoutes);

// Synchronization
app.use("/api/sync", syncRoutes);

// Search
app.use("/api/search", searchRoutes);

export default app;