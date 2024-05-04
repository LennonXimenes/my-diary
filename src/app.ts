import express, { Application, Request, Response } from "express";

const app: Application = express();
app.use(express.json());

app.get("", (req: Request, res: Response): any => {
    return res.status(200).json({ message: "ok" });
});

export default app;