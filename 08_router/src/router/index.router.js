import { Router } from "express";
import apiRouter from "./api/index.api.js";

const indexRouter = Router();

indexRouter.use("/api", apiRouter)
//indexRouter.use("/", viewsRouter)

export default indexRouter;
