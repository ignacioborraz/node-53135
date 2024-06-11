import Service from "./service.js";
//import productsManager from "../data/memory/ProductsManager.memory.js";
//import productsManager from "../data/fs/ProductsManager.fs.js";
//import productsManager from "../data/mongo/ProductsManager.mongo.js";

//el servicio ya no llama a la persistencia, llama al repositorio
import productsRepository from "../repositories/products.rep.js";

//const productsService = new Service(productsManager);
const productsService = new Service(productsRepository);

export const {
  createService,
  readService,
  paginateService,
  readOneService,
  updateService,
  destroyService,
} = productsService;
