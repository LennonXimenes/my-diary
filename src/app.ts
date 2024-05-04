import express, { Application, Request, Response } from "express";
import { userRouter } from "./routers";

const app: Application = express();
app.use(express.json());

app.use("/user", userRouter);

export default app;