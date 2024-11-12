import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import userRoute from "./routes/user";
import logger from 'morgan';
import { config } from "dotenv";

config();

const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;

export const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger('dev'))

app.use('/users', userRoute)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
