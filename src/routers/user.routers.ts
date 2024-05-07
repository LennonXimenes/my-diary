import { Router } from "express";
import { userControllers } from "../controllers";

const userRouter: Router = Router();

userRouter.post("", userControllers.createUser);
userRouter.get("", userControllers.readUser);

userRouter.patch("/:userId", userControllers.updateUser);


export default userRouter;