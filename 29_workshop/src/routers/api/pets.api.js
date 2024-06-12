//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";

class PetsRouter extends CustomRouter {
  init() {}
}

const petsRouter = new PetsRouter();
export default petsRouter.getRouter();
