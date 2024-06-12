//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";

class AuthRouter extends CustomRouter {
  init() {}
}

const authRouter = new AuthRouter();
export default authRouter.getRouter();
