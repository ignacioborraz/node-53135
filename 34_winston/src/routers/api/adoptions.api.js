//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";

import {
  create,
  readAll,
  read
} from "../controllers/adoptions.controller.js";

import areValidParams from "../middlewares/areValidParams.js";
import isAdopted from "../middlewares/isAdopted.js";

class AdoptionsRouter extends CustomRouter {
  init() {
    router.create("/:uid/:pid", ["ADMIN"], areValidParams, isAdopted, create);
    router.read("/", ["PUBLIC"], readAll);
    router.read("/:aid", ["PUBLIC"], read);
  }
}

const adoptionsRouter = new AdoptionsRouter();
export default adoptionsRouter.getRouter();
