import argsUtil from "../utils/args.util.js";
import dbConnect from "../utils/dbConnect.util.js";

const persistence = argsUtil.persistence;
let dao = {};
//objeto que voy a cargar dinamicamente con las importaciones de los managers que correspondan

switch (persistence) {
  case "memory":
    console.log("connected to memory");
    //voy a llenar dao con las importaciones de memory
    const { default: productsManagerMem } = await import(
      "./memory/ProductsManager.memory.js"
    );
    const { default: cartsManagerMem } = await import(
      "./memory/CartsManager.memory.js"
    );
    const { default: usersManagerMem } = await import(
      "./memory/UsersManager.memory.js"
    );
    //se tienen que traer TODOS los manager de todos los recursos y ya tienen que estar HOMOLOGADOS
    //una vez que logré importar los managers, lleno el objeto dao con los recursos correspondientes
    dao = {
      users: usersManagerMem,
      products: productsManagerMem,
      carts: cartsManagerMem,
    };
    break;
  case "fs":
    console.log("connected to file system");
    //voy a llenar dao con las importaciones de fs
    const { default: productsManagerFs } = await import(
      "./fs/ProductsManager.fs.js"
    );
    const { default: cartsManagerFs } = await import("./fs/CartsManager.fs.js");
    const { default: usersManagerFs } = await import("./fs/UsersManager.fs.js");
    //se tienen que traer TODOS los manager de todos los recursos y ya tienen que estar HOMOLOGADOS
    //una vez que logré importar los managers, lleno el objeto dao con los recursos correspondientes
    dao = {
      users: usersManagerFs,
      products: productsManagerFs,
      carts: cartsManagerFs,
    };
    break;
  default:
    console.log("connected to database");
    dbConnect();
    //por defecto manejemos mongo
    //voy a llenar dao con las importaciones de mongo
    const { default: productsManagerMongo } = await import(
      "./mongo/ProductsManager.mongo.js"
    );
    const { default: cartsManagerMongo } = await import(
      "./mongo/CartsManager.mongo.js"
    );
    const { default: usersManagerMongo } = await import(
      "./mongo/UsersManager.mongo.js"
    );
    //se tienen que traer TODOS los manager de todos los recursos y ya tienen que estar HOMOLOGADOS
    //una vez que logré importar los managers, lleno el objeto dao con los recursos correspondientes
    dao = {
      users: usersManagerMongo,
      products: productsManagerMongo,
      carts: cartsManagerMongo,
    };
    break;
}

export default dao;
