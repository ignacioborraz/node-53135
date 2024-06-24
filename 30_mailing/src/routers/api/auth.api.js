//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";
import passportCallback from "../../middlewares/passportCb.mid.js"
import { register, login, verifyCode } from "../../controllers/auth.controller.js";

class AuthRouter extends CustomRouter {
  init() {
    this.create("/register", ["PUBLIC"], passportCallback("register"), register);
    this.create("/login", ["PUBLIC"], passportCallback("login"), login);
    this.create("/verify", ["PUBLIC"], verifyCode);
  }
}

const authRouter = new AuthRouter();
export default authRouter.getRouter();
