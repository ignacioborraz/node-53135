import Service from "./service.js";
//import cartsManager from "../data/memory/CartsManager.memory.js";
//import cartsManager from "../data/fs/CartsManager.fs.js";
//import cartsManager from "../data/mongo/CartsManager.mongo.js";

//el servicio ya no llama a la persistencia, llama al repositorio
import cartsRepository from "../repositories/carts.rep.js";

//const cartsService = new Service(cartsManager);
const cartsService = new Service(cartsRepository);

export const {
  createService,
  readService,
  readOneService,
  updateService,
  destroyService,
} = cartsService;
