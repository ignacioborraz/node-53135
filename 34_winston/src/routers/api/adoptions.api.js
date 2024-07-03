//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";

import {
  create,
  readAll,
  read
} from "../../controllers/adoptions.controller.js";

class AdoptionsRouter extends CustomRouter {
  init() {
    this.create("/:uid/:pid", ["ADMIN"], /* areValidParams, isAdopted, */ create);
    this.read("/", ["PUBLIC"], readAll);
    this.read("/:aid", ["PUBLIC"], read);
  }
}

const adoptionsRouter = new AdoptionsRouter();
export default adoptionsRouter.getRouter();
