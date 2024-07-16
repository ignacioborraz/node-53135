//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";

import {
  create,
  readAll,
  readById,
  update,
  destroy,
} from "../../controllers/pets.controller.js";

import validator from "../../middlewares/joi.mid.js";
import validSchema from '../../schemas/pet.schema.js';

class PetsRouter extends CustomRouter {
  init() {
    this.create("/", ["ADMIN"], validator(validSchema), create);
    this.read("/", ["PUBLIC"], readAll);
    this.read("/:pid", ["PUBLIC"], readById);
    this.update("/:pid", ["ADMIN"], update);
    this.destroy("/:pid", ["ADMIN"], destroy);
  }
}

const petsRouter = new PetsRouter();
export default petsRouter.getRouter();
