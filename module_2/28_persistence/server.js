import environment from "./src/utils/env.util.js";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"

import argsUtil from "./src/utils/args.util.js";

import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
//import dbConnect from "./src/utils/dbConnect.util.js";

//http server
const server = express();
const port = environment.PORT || argsUtil.p;
const ready = async () => {
  console.log("server ready on port " + port);
  //await dbConnect();
  //hay que incluir la conexión a mongo desde el patron factory
};
server.listen(port, ready);

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"));
server.use(cookieParser(environment.SECRET_COOKIE));
server.use(cors({ origin: true, credentials: true }))

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);

//console.log(argsUtil);
//console.log(environment);
