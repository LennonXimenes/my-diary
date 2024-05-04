import { QueryResult } from "pg";

type iUser = {
    id: number,
    name: string,
    email: string,
    password: string,
    age: number,
    profile_picture?: string,
    admin: boolean,
    created_at: Date | string,
    updated_at: Date | string,
    last_login: Date | string
}

type iUserResult = QueryResult<iUser>;
type iUserCreate = Omit<iUser, "id">;

export { iUser, iUserResult, iUserCreate };