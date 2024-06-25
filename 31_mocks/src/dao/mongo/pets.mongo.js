import Pet from "./models/pet.model.js";
import Manager from "./manager.mongo.js";

const petsManager = new Manager(Pet);
export default petsManager;
