import CustomRouter from "../CustomRouter.js";
import adoptionsRouter from "./adoptions.api.js";
import petsRouter from './pets.api.js';
import authRouter from "./auth.api.js";

class ApiRouter extends CustomRouter {
  init() {
    this.use("/adoptions", adoptionsRouter);
    this.use("/pets", petsRouter);
    this.use("/auth", authRouter);
  }
}

const apiRouter = new ApiRouter();

export default apiRouter.getRouter();
