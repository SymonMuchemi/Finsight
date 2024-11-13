import { Request, Response } from "express";
import { createUser, getAllUsers } from "../services/user.services";
import { validationResult } from "express-validator";

/**
 * Controller to handle the creation of a new user.
 *
 * @param req - The request object containing the user data in the body.
 * @param res - The response object used to send back the HTTP response.
 * @returns A promise that resolves to a response object with the status code and JSON payload.
 *
 * @throws Will return a 500 status code and an error message if an error occurs during user creation.
 */
export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { code, message, details } = await createUser(req.body);

        return res.status(code).json({ message, details });
    } catch (error: any) {
        return res.status(500).json({
            message: 'user.controller: Error creating user',
            details: error.toString()
        })
    }
}

export const getAllUsersController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { code, message, details } = await getAllUsers();

        return res.status(code).json({ message, details });
    } catch (error: any) {
        return res.status(500).json({
            message: 'user.controller: Error fetching user details',
            details: error.toString()
        })
    }
}
