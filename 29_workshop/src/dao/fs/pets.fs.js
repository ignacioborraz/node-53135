import Pet from "./models/pet.model.js";
import Manager from "./manager.fs.js";

const petsManager = new Manager(Pet);
export default petsManager;
