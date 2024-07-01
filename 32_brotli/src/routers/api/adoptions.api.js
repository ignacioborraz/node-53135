//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";

class AdoptionsRouter extends CustomRouter {
  init() {}
}

const adoptionsRouter = new AdoptionsRouter();
export default adoptionsRouter.getRouter();
