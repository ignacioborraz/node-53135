import argsUtil from "../utils/args.util.js";
import dbConnect from "../utils/dbConnect.util.js";

const persistence = argsUtil.persistence;
let dao = {};

switch (persistence) {
  case "fs":
    console.log("connected to file system");
    const { default: petsManagerFs } = await import("./fs/pets.fs.js");
    const { default: usersManagerFs } = await import("./fs/users.fs.js");
    const { default: adoptionsManagerFs } = await import(
      "./fs/adoptions.fs.js"
    );
    dao = {
      petsManager: petsManagerFs,
      usersManager: usersManagerFs,
      adoptionsManager: adoptionsManagerFs,
    };
    break;
  default:
    console.log("connected to database");
    dbConnect();
    const { default: petsManagerMongo } = await import("./mongo/pets.mongo.js");
    const { default: usersManagerMongo } = await import(
      "./mongo/users.mongo.js"
    );
    const { default: adoptionsManagerMongo } = await import(
      "./mongo/adoptions.mongo.js"
    );
    dao = {
      petsManager: petsManagerMongo,
      usersManager: usersManagerMongo,
      adoptionsManager: adoptionsManagerMongo,
    };
    break;
}

export default dao;
