import CustomRouter from "../CustomRouter.js";
import { create, read, readOne, update, destroy } from "../../controllers/carts.controller.js";

class CartsRouter extends CustomRouter {
  init() {
    this.create("/", ["USER"], create);
    this.read("/", ["USER"], read);
    this.read("/:nid", ["USER"], readOne);
    this.update("/:nid", ["USER"], update);
    this.destroy("/:nid", ["USER"], destroy);
  }
}

const cartsRouter = new CartsRouter();
export default cartsRouter.getRouter();
