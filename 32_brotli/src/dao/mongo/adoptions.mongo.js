import Adoption from "./models/adoption.model.js";
import Manager from "./manager.mongo.js";

const adoptionsManager = new Manager(Adoption);
export default adoptionsManager;
