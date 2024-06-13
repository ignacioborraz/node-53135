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
    this.create("/", ["PUBLIC"], isValidPet, create);
    //la creacion de una mascota deberia ser ADMIN, PEEERO no tenemos el register/login armado
    this.read("/", ["PUBLIC"], read);
    this.read("/:pid", ["PUBLIC"], readById);
    this.update("/:pid", ["PUBLIC"], update);
    this.destroy("/:pid", ["PUBLIC"], destroy);
  }
}

const petsRouter = new PetsRouter();
export default petsRouter.getRouter();
