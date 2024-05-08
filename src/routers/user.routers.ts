import { Router } from "express";
import { userControllers } from "../controllers";
import middlewares from "../middlewares";

const userRouter: Router = Router();

userRouter.post("",
    middlewares.verifyUserName,
    middlewares.verifyUserEmail,
    userControllers.createUser
);

userRouter.get("", userControllers.readUser);

userRouter.patch("/:userId",
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