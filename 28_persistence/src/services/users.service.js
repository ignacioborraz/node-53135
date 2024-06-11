import Service from "./service.js";
//import usersManager from "../data/memory/UsersManager.memory.js";
//import usersManager from "../data/fs/UsersManager.fs.js";
//import usersManager from "../data/mongo/UsersManager.mongo.js";

//el servicio ya no llama a la persistencia, llama al repositorio
import usersRepository from "../repositories/users.rep.js";

//const usersService = new Service(usersManager);
const usersService = new Service(usersRepository);

export const {
  createService,
  readService,
  paginateService,
  readOneService,
  updateService,
  destroyService,
} = usersService;
