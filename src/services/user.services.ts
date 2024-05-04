// import "express-async-errors";
import { iUser, iUserCreate, iUserResult } from "../interfaces";
import format from "pg-format";
import { client } from "../database";

const createUser = async (payload: iUserCreate): Promise<iUser> => {
    const queryFormat: string = format(
        `INSERT INTO "users" (%I) VALUES (%L) RETURNING *;`,
        Object.keys(payload),
        Object.values(payload)
    );

    const queryResult: iUserResult = await client.query(queryFormat);

    return queryResult.rows[0]
};

const readUser = async (): Promise<Array<iUser>> => {
    const queryFormat: string = format(
        `SELECT * FROM "users";`
    );

    const queryResult: iUserResult = await client.query(queryFormat);

    return queryResult.rows;
}

export default { createUser, readUser };