//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";

import {
  register,
  login,
  verifyCode,
  signout,
  destroy,
} from "../../controllers/auth.controller.js";

import passportCallback from "../../middlewares/passportCb.mid.js";
import validate from "../../middlewares/joi.mid.js";
import usersSchema from "../../schemas/user.schema.js";

class AuthRouter extends CustomRouter {
  init() {
    this.create(
      "/register",
      ["PUBLIC"],
      validate(usersSchema),
      passportCallback("register"),
      register
    );
    this.create("/login", ["PUBLIC"], passportCallback("login"), login);
    this.create("/verify", ["PUBLIC"], verifyCode);
    this.create("/signout", ["USER", "ADMIN"], signout);
    this.destroy("/:id", ["PUBLIC"], destroy);
  }
}

const authRouter = new AuthRouter();
export default authRouter.getRouter();
