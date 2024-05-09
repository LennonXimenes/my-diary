import { QueryResult } from "pg";
import { userCreateSchema, userSchema, userUpdateSchema } from "../schemas";
import { z } from "zod";

type iUser = z.infer<typeof userSchema>;

type iUserRead = Array<iUser>;
type iUserCreate = z.infer<typeof userCreateSchema>;
type iUserUpdate = z.infer<typeof userUpdateSchema>;

type iUserResult = QueryResult<iUser>;

export { iUser, iUserRead, iUserCreate, iUserUpdate, iUserResult };