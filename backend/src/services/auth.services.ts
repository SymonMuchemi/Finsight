import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../app';
import { CreateUser } from '../types';

export const loginUser = async (user: CreateUser) => {
    try {
        const { email, password } = user;

        // check if user exists
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (!existingUser) {
            return {
                code: 404,
                message: 'auth.service: Error finding user',
                details: `Could not find user with email: ${email}`
            }
        }

        console.log('Matching passwords');
        const isMatch: boolean = await bcrypt.compare(password, existingUser.password);

        if (!isMatch) {
            console.log('Invalid credentials');

            return {
                code: 400,
                message: 'auth.service: Login error',
                details: 'Invalid credentials'
            }
        }

        const jwtSecret = process.env.JWT_SECRET;
        const jwtExpiration = process.env.JWT_EXPIRATION;

        if (!jwtSecret || !jwtExpiration) {
            console.log('JWT secrets and expiration data is invalid');
            console.log('JWT secret', jwtSecret);
            console.log('JWT expiration', jwtExpiration)
            throw new Error("JWT_SECRET or JWT_EXPIRES_IN is not defined in environment variables")
        }

        const token = jwt.sign({ userId: existingUser.id }, jwtSecret, {
            expiresIn: jwtExpiration,
        });

        console.log('Authentication token created!');

        return {
            code: 200,
            message: 'User validation success',
            details: { token }
        }
    } catch (error: any) {
        return {
            code: 500,
            message: 'user.service: Login error',
            details: error.toString()
        }
    }
}
