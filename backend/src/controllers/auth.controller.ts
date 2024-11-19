import { Request, Response } from "express";
import { loginUser } from "../services/auth.services";
import { createUser } from "../services/user.services";

export const loginController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { code, message, details } = await loginUser(req.body);

        return res.status(code).json({ message, details });
    } catch (error: any) {
        return res.status(500).json({
            message: 'auth.controller: Error creating user',
            details: error.toString()
        })
    }
}

export const registerController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { code, message, details } = await createUser(req.body);

        return res.status(code).json({ message, details });
    } catch (error: any) {
        return res.status(500).json({
            message: 'auth.controller: Error creating user',
            details: error.toString()
        })
    }
}
