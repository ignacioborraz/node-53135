import CustomRouter from "./CustomRouter.js";
import apiRouter from "./api/index.api.js";

class IndexRouter extends CustomRouter {
  init() {
    this.use("/api", apiRouter);
  }
}

const indexRouter = new IndexRouter();

export default indexRouter.getRouter();
