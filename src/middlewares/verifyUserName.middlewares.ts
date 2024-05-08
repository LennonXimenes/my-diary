import { NextFunction, Request, Response } from "express";
import { iUserResult } from "../interfaces";
import { client } from "../database";
import format from "pg-format";
import { AppError } from "../errors";

export const verifyUserName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userName: string = req.body.name;

    const queryFormat: string = format(
        `SELECT * FROM "users" WHERE "name" = $1;`
    );

    const queryResult: iUserResult = await client.query(queryFormat, [userName]);

    if (queryResult.rows.length !== 0) {
        throw new AppError("Name already exists!", 409);
    };

    return next();
};