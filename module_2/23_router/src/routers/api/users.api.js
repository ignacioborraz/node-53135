import CustomRouter from "../CustomRouter.js";
//import usersManager from "../../data/fs/UsersManager.fs.js";
import usersManager from "../../data/mongo/UsersManager.mongo.js";
import isPhoto from "../../middlewares/isPhoto.js";
import uploader from "../../middlewares/multer.mid.js";

class UsersRouter extends CustomRouter {
  init() {
    this.create("/", uploader.single("photo"), isPhoto, create);
    this.read("/", read);
    this.read("/:uid", readOne);
    this.update("/:uid", update);
    this.destroy("/:uid", destroy);
  }
}

const usersRouter = new UsersRouter();
export default usersRouter.getRouter();

async function create(req, res, next) {
  try {
    const data = req.body;
    const one = await usersManager.message201("CREATED ID: " + one.id);
  } catch (error) {
    return next(error);
  }
}

async function read(req, res, next) {
  try {
    const { role } = req.query;
    const all = await usersManager.read(role);
    if (all.length > 0) {
      return res.response200(all);
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function readOne(req, res, next) {
  try {
    const { uid } = req.params;
    const one = await usersManager.readOne(uid);
    if (one) {
      return res.response200(one);
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function update(req, res, next) {
  try {
    const { uid } = req.params;
    const data = req.body;
    const one = await usersManager.update(uid, data);
    if (one) {
      return res.response200(one);
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { uid } = req.params;
    const one = await usersManager.destroy(uid);
    if (one) {
      return res.response200(one);
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}
