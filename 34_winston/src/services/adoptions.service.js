//SERVICIO LLAMA A REPOSITORIO
import Service from "./service.js";
import adoptionsRepository from '../repositories/adoptions.rep.js';
const adoptionsService = new Service(adoptionsRepository);

export const {
  createService,
  readAllService,
  readByIdService,
  updateService,
  destroyService,
} = adoptionsService;
