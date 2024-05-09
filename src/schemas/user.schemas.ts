import { z } from "zod"

const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50).min(3),
    email: z.string().email().max(50).min(3),
    password: z.string().max(50).min(3),
    age: z.number(),
    profile_picture: z.string(),
    admin: z.boolean().default(false),
    created_at: z.date(),
    updated_at: z.date(),
    last_login: z.date(),
});

const userCreateSchema = userSchema.omit({ id: true, admin: true, created_at: true, updated_at: true, last_login: true });
const userUpdateSchema = userCreateSchema.partial();

export { userSchema, userCreateSchema, userUpdateSchema };
