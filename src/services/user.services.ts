// import "express-async-errors";
import { iUser, iUserCreate, iUserResult, iUserUpdate } from "../interfaces";
import format from "pg-format";
import { client } from "../database";
import { QueryConfig } from "pg";

const createUser = async (payload: iUserCreate): Promise<iUser> => {
    const queryFormat: string = format(
        `INSERT INTO "users" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: iUserResult = await client.query(queryFormat);

    return queryResult.rows[0];
};

const readUser = async (): Promise<Array<iUser>> => {
    const queryFormat: string = format(
        `SELECT * FROM "users";`
    );

    const queryResult: iUserResult = await client.query(queryFormat);

    return queryResult.rows;
};

const updateUser = async (payload: iUserUpdate, userId: string): Promise<iUser> => {
    const queryFormat: string = format(
        `UPDATE "users" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: iUserResult = await client.query(queryFormat, [userId]);

    return queryResult.rows[0];
};

export default { createUser, readUser, updateUser };