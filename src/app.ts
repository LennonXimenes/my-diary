import "express-async-errors";
import express, { Application, Request, Response } from "express";
import { userRouter } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(express.json());

app.use("/user", userRouter);

app.use(middlewares.handleErrors);

export default app;