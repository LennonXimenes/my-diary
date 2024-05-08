import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { iUser, iUserResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const verifyUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { userId } = req.params;

    const queryFormat: string = format(
        `SELECT * FROM "users" WHERE "id" = $1;`
    );

    // console.log(`userId = ${userId}`)

    const queryResult: iUserResult = await client.query(queryFormat, [userId]);

    if (queryResult.rows.length === 0) {
        throw new AppError("User does not exist!", 409);
    };

    const foundUser: iUser = queryResult.rows[0];
    res.locals = { foundUser };

    return next();
};