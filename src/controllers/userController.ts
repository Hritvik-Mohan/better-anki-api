import { Request, Response } from "express";
import prisma from "../prisma/prismaClient";

export const getProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.userId },
            select: { id: true, email: true, createdAt: true },
        });

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: "Internal server error."});
    }
};