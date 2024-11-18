import { CreateUser } from "../types";
import { prisma } from "../app";
import bcrypt from 'bcryptjs';
import { ResponseBody } from "../types";

/**
 * Creates a new user in the database.
 *
 * @param {CreateUser} newUser - The user data to create a new user.
 * @returns {Promise<ResponseBody>} The response body containing the status code, message, and details.
 *
 * @throws {Error} If there is a server error during the user creation process.
 *
 * @example
 * const newUser = { email: 'example@example.com', password: 'password123' };
 * const response = await createUser(newUser);
 * console.log(response);
 */
export const createUser = async (newUser: CreateUser): Promise<ResponseBody> => {
    try {
        const { name, email, password } = newUser;

        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return {
                code: 409,
                message: 'user.service: Error creating user',
                details: 'User already exists'
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = await prisma.user.create({ data: { name, email, password: hashedPassword } })

        if (!createdUser) {
            return {
                code: 400,
                message: 'user.service: Error creating user',
                details: 'User could not be created!'
            }
        }

        return {
            code: 201,
            message: 'user.service: User created succesfully!',
            details: createdUser
        }

    } catch (error: any) {
        return {
            code: 500,
            message: 'user.service: server error!',
            details: error.toString()
        }
    }
}

/**
 * Fetches all user details from the database.
 *
 * @returns {Promise<{code: number, message: string, details: any}>} - A promise that resolves to an object containing:
 * - `code`: HTTP status code (200 for success, 500 for error)
 * - `message`: A message indicating the result of the operation
 * - `details`: An array of user details if successful, or an error message if an error occurred
 *
 * @throws {Error} - If there is an error fetching user details from the database
 */
export const getAllUsers = async () => {
    try {
        const allUsers = await prisma.user.findMany();

        return {
            code: 200,
            message: 'Users details fetched!',
            details: allUsers
        }
    } catch (error: any) {
        return {
            code: 500,
            message: 'user.service: Error getching user details',
            details: error.toString()
        }
    }
}
