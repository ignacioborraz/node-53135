import Service from "./service.js";
import productsManager from "../data/mongo/ProductsManager.mongo.js";

const productsService = new Service(productsManager);
export const { createService, readService, paginateService, readOneService, updateService, destroyService } = productsService;
