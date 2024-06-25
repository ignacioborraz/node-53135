//SERVICIO LLAMA A REPOSITORIO
import Service from "./service.js";
const authService = new Service();

export const {
  createService,
  readService,
  readOneService,
  updateService,
  destroyService,
} = authService;
