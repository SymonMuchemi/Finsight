import express, { Express, Response, Request } from "express";

const app: Express = express();
const indexRouter = express.Router();

indexRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default indexRouter;
