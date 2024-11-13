import { CreateUser } from "../types";
import { prisma } from "../app";
import bcrypt from 'bcryptjs';
import { ResponseBody } from "../types";

export const createUser = async (newUser: CreateUser): Promise<ResponseBody> => {
    try {
        const { email, password } = newUser;

        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return {
                code: 409,
                message: 'user.service: Error creating user',
                details: 'User already exists'
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = await prisma.user.create({ data: { email, password: hashedPassword } })

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
