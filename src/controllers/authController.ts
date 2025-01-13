import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma/prismaClient'

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password, username } = req.body;

    console.log(email, password);

    if (!email || !password || !username) {
        res.status(400).json({ error: "Email, password, and username are required. "});
        return;
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                username,
            },
        });

        res.status(201).json({ message: "User registered successfully", userId: newUser.id});

    } catch (err: any) {
        if (err.code === "P2002") {
            res.status(400).json({
                error: "Email already exists."
            });
        } else {
            res.status(500).json({error: "Internal server error asdfasd", err});
        }
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "Email and password are required. "});
        return;
    }

    try {
        const user = await prisma.user.findUnique({ where: { email }});

        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(401).json({ error: "Invalid credentials." });
            return;
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1h"});

        res.status(200).json({ message: "Login successful.", token});
    } catch(err) {
        res.status(500).json({ error: "Internal server error."});
    }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
}