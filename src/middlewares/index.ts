import { handleErrors } from "./handleErrors.middlewares";
import { verifyUserBody } from "./verifyUserBody.middlewares";
import { verifyUserEmail } from "./verifyUserEmail.middlewares";
import { verifyUserId } from "./verifyUserId.middlewares";
import { verifyUserName } from "./verifyUserName.middlewares";

export default { handleErrors, verifyUserId, verifyUserName, verifyUserEmail, verifyUserBody };