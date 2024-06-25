//SERVICIO LLAMA A REPOSITORIO
import Service from "./service.js";
const adoptionsService = new Service();

export const {
  createService,
  readService,
  readOneService,
  updateService,
  destroyService,
} = adoptionsService;
