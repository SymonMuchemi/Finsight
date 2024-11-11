import { Router } from "express";
import { asyncHandler } from "../utils";
import { createUserController } from "../controllers/user.controllers";

const userRoute = Router();

userRoute.post('/', asyncHandler(createUserController));

export default userRoute
