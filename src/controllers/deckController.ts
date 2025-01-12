import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface AuthenticateRequest extends Request {
    user: { id: number }
}

export const getAllDecks = async (req: AuthenticateRequest, res: Response): Promise<void> => {
    const userId = req.user?.id;

    try {
        const decks = await prisma.deck.findMany({
            where: { userId },
        });
        
        res.status(200).json(decks);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch decks", error: (error as Error).message })
    }
}

export const createDeck = async (req: Request, res: Response): Promise<void> => {
}

export const getDeckById = async (req: Request, res: Response): Promise<void> => {
}

export const updateDeck = async (req: Request, res: Response): Promise<void> => {
}

export const deleteDeck = async (req: Request, res: Response): Promise<void> => {
}