import { Router } from "express";
import { asyncHandler } from "../utils";
import { userSchema } from "../middleware/validators/user.validator";
import {
    createUserController,
    getAllUsersController
} from "../controllers/user.controller";

const userRoute = Router();

userRoute.post('/', userSchema, asyncHandler(createUserController));
userRoute.get('/', asyncHandler(getAllUsersController));

export default userRoute
