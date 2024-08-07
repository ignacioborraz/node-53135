//SERVICIO LLAMA A REPOSITORIO
import petsRepository from "../repositories/pets.rep.js";
import Service from "./service.js";

const petsService = new Service(petsRepository);

export const {
  createService,
  readAllService,
  readByIdService,
  updateService,
  destroyService,
} = petsService;
