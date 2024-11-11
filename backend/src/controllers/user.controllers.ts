import { Request, Response } from "express";
import { createUser } from "../services/user.services";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { code, message, details } = await createUser(req.body);

        return res.status(code).json({ message, details });
    } catch (error: any) {
        return res.status(500).json({
            message: 'user.controller: Error creating user',
            details: error.toString()
        })
    }
}
