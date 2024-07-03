//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";

import {
  create,
  readAll,
  readById,
  update,
  destroy,
} from "../../controllers/pets.controller.js";

import isValidPet from "../../middlewares/isValidPet.mid.js";

class PetsRouter extends CustomRouter {
  init() {
    this.create("/", ["ADMIN"], isValidPet, create);
    this.read("/", ["PUBLIC"], readAll);
    this.read("/:pid", ["PUBLIC"], readById);
    this.update("/:pid", ["ADMIN"], update);
    this.destroy("/:pid", ["ADMIN"], destroy);
  }
}

const petsRouter = new PetsRouter();
export default petsRouter.getRouter();
