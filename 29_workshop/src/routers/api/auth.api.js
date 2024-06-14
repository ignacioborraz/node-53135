//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";
import passportCallback from "../../middlewares/passportCb.mid.js"
import { register, login } from "../../controllers/auth.controller.js";

class AuthRouter extends CustomRouter {
  init() {
    this.create("/register", ["PUBLIC"], passportCallback("register"), register);
    this.create("/login", ["PUBLIC"], passportCallback("login"), login);
  }
}

const authRouter = new AuthRouter();
export default authRouter.getRouter();
