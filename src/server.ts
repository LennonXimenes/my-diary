import app from "./app";
import "dotenv/config";
import { startDatabase } from "./database";

const PORT: number = Number(process.env.PORT) || 3000;
const runningMsg: string = `Server is running on ${PORT}`;

app.listen(PORT, async (): Promise<void> => {
    await startDatabase();
    console.log(runningMsg);
});