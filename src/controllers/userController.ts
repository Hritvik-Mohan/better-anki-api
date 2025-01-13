import { Request, Response } from "express";
import prisma from "../prisma/prismaClient";

export const getProfile = async (req: Request, res: Response): Promise<void> => {
    if (!req.user) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: { id: true, email: true, createdAt: true },
        });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: "Internal server error."});
    }
};

export const updateUserProfile = async (req: Request, res: Response): Promise<void> => {
}

export const getUserStats = async (req: Request, res: Response): Promise<void> => {
}
