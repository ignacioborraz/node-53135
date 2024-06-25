import CustomRouter from "../CustomRouter.js";
import {
  create,
  read,
  readOne,
  update,
  destroy,
} from "../../controllers/users.controller.js";
import isPhoto from "../../middlewares/isPhoto.js";
import uploader from "../../middlewares/multer.mid.js";
//ENRUTADOR LLAMA A CONTROLADOR

class UsersRouter extends CustomRouter {
  init() {
    this.create("/", ["PUBLIC"], uploader.single("photo"), isPhoto, create);
    this.read("/", ["PUBLIC"], read);
    this.read("/:uid", ["PUBLIC"], readOne);
    this.update("/:uid", ["PUBLIC"], update);
    this.destroy("/:uid", ["PUBLIC"], destroy);
  }
}

const usersRouter = new UsersRouter();
export default usersRouter.getRouter();
