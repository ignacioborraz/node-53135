//ENRUTADOR LLAMA A CONTROLADOR
import CustomRouter from "../CustomRouter.js";
import {
  create,
  read,
  readById,
  update,
  destroy,
} from "../../controllers/pets.controller.js";
import isValidPet from "../../middlewares/isValidPet.mid.js";

class PetsRouter extends CustomRouter {
  init() {
    this.create("/", ["ADMIN"], isValidPet, create);
    //la creacion de una mascota deberia ser ADMIN, PEEERO no tenemos el register/login armado
    this.read("/", ["PUBLIC"], read);
    this.read("/:pid", ["PUBLIC"], readById);
    this.update("/:pid", ["ADMIN"], update);
    this.destroy("/:pid", ["ADMIN"], destroy);
  }
}

const petsRouter = new PetsRouter();
export default petsRouter.getRouter();
