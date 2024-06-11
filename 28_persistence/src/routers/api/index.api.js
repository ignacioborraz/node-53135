import CustomRouter from "../CustomRouter.js";
import productsRouter from "./products.api.js";
import cartsRouter from "./carts.api.js";
import usersRouter from "./users.api.js";
import sessionsRouter from "./sessions.api.js";

class ApiRouter extends CustomRouter {
  init() {
    this.use("/products", productsRouter);
    this.use("/carts", cartsRouter);
    this.use("/users", usersRouter);
    this.use("/sessions", sessionsRouter);
  }
}

const apiRouter = new ApiRouter();

export default apiRouter.getRouter();
