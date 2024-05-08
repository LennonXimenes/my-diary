import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { iUserResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const verifyUserEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userEmail: string = req.body.email;

    const queryFormat: string = format(
        `SELECT * FROM "users" WHERE "email" = $1;`
    );

    const queryResult: iUserResult = await client.query(queryFormat, [userEmail]);

    if (queryResult.rows.length !== 0) {
        throw new AppError("Email already exists!", 409);
    };

    return next();
}