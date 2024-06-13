import User from "./models/user.model.js";
import Manager from "./manager.mongo.js";

const usersManager = new Manager(User);
export default usersManager;
