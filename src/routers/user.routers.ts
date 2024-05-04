import { Router } from "express";
import { userControllers } from "../controllers";

const userRouter: Router = Router();

userRouter.get("", userControllers.readUser);
userRouter.post("", userControllers.createUser);

export default userRouter;