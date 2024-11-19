import { Router } from "express";
import { asyncHandler } from "../utils";
import { loginController, registerController } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/login', asyncHandler(loginController))
authRouter.post('/register', asyncHandler(registerController))

export default authRouter;
