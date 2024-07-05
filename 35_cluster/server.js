import environment from "./src/utils/env.util.js";
import cluster from "cluster"
import cookieParser from "cookie-parser";
import cors from "cors";
import compression from "express-compression";
import express from "express"
import { cpus } from "os";
import argsUtil from "./src/utils/args.util.js";

import winston from "./src/middlewares/winston.mid.js";
import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";

//http server
const server = express();
const port = environment.PORT || argsUtil.p;
const ready = async () => console.log("server ready on port " + port);
const numOfProc = cpus().length
if(cluster.isPrimary) {
  for (let i=1; i<=numOfProc; i++) {
    cluster.fork()
  }
  console.log("proceso primario");
} else {
  console.log("proceso worker "+process.pid);
  server.listen(port, ready);
}

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.use(winston);
server.use(cookieParser(environment.SECRET_COOKIE));
server.use(cors({ origin: true, credentials: true }));
server.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
);

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);
