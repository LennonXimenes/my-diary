import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";

const userRouter: Router = Router();

userRouter.post("", userControllers.createUser);
userRouter.get("", userControllers.readUser);

userRouter.patch("/:userId", middlewares.verifyUserId, userControllers.updateUser);
userRouter.delete("/:userId", middlewares.verifyUserId, userControllers.deleteUser);


export default userRouter;