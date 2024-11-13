import { checkSchema } from 'express-validator';

export const userSchema = checkSchema({
    name: {
        isString: {
            errorMessage: 'Name must be a string!'
        },
        escape: true
    },
    email: {
        isEmail: {
            errorMessage: 'email must be a valid email string'
        },
        escape: true
    },
    password: {
        isString: {
            errorMessage: 'password must be a string'
        },
        isLength: {
            options: {min: 8},
            errorMessage: 'password must at 8 characters long'
        },
        escape: true
    }
})
