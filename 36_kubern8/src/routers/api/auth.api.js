//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";

import {
  register,
  login,
  verifyCode,
  //signout,
  //online
} from "../../controllers/auth.controller.js";

import passportCallback from "../../middlewares/passportCb.mid.js"

class AuthRouter extends CustomRouter {
  init() {
    this.create("/register", ["PUBLIC"], passportCallback("register"), register);
    this.create("/login", ["PUBLIC"], passportCallback("login"), login);
    this.create("/verify", ["PUBLIC"], verifyCode);
    //this.create("/signout", ["USER"], signout);
    //this.create("/online", ["USER"], online);
  }
}

const authRouter = new AuthRouter();
export default authRouter.getRouter();
