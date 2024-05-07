import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { iUserResult } from "../interfaces";
import { client } from "../database";

export const verifyUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req.params;

    const queryFormat: string = format(
        `SELECT * FROM "users" WHERE "id" = $1;`
    );

    const queryResult: iUserResult = await client.query(queryFormat, [userId]);

    if (queryResult.rows.length === 0) {
        res.status(400).json({ message: "User does not exist!" });
    };

    return next();
};