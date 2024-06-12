//SERVICIO LLAMA A REPOSITORIO
import Service from "./service.js";
const petsService = new Service();

export const {
  createService,
  readService,
  readOneService,
  updateService,
  destroyService,
} = petsService;
