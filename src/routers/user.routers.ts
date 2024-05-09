import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

const userRouter: Router = Router();

userRouter.post("",
    middlewares.verifyUserBody(userCreateSchema),
    middlewares.verifyUserName,
    middlewares.verifyUserEmail,
    userControllers.createUser
);

userRouter.get("", userControllers.readUser);

userRouter.patch("/:userId",
    middlewares.verifyUserBody(userUpdateSchema),
    middlewares.verifyUserId,
    middlewares.verifyUserName,
    middlewares.verifyUserEmail,
    userControllers.updateUser
);

userRouter.delete("/:userId",
    middlewares.verifyUserId,
    userControllers.deleteUser
);


export default userRouter;