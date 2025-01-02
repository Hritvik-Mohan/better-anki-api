import express from "express";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

// Authentication
app.use("/api/auth", authRoutes);

// User Management
app.use("/api/user", userRoutes);

// Decks
app.use("/api/decks", userRoutes);

// Cards
app.use("/api/cards", userRoutes);

//Study Sessions
app.use("/api/study/session", userRoutes);

// Review and Progress
app.use("/api/review", userRoutes);
app.use("/api/progress", userRoutes);

// Synchronization
app.use("/api/sync", userRoutes);

// Search
app.use("/api/search", userRoutes);

export default app;