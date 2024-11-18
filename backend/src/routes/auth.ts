import { Router } from "express";
import { asyncHandler } from "../utils";
import { loginController } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post('/login', asyncHandler(loginController))

export default authRouter;
