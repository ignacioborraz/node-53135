import environment from "./src/utils/env.util.js";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import argsUtil from "./src/utils/args.util.js";

import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import dbConnect from "./src/utils/dbConnect.util.js";

//http server
const server = express();
const port = environment.PORT || argsUtil.p;
const ready = async () => {
  console.log("server ready on port " + port);
  await dbConnect();
};
server.listen(port, ready);

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(__dirname + "/public"));
server.use(morgan("dev"));
server.use(cookieParser(environment.SECRET_COOKIE));
//const FileSession = fileStore(session);
//server.use(
//session({
/* file store */
/*  
      store: new FileSession({
      path: "./src/data/fs/files/sessions",
      ttl: 60 * 60,
    }),
    */
/* mongo store */
/*
      store: new MongoStore({ mongoUrl: environment.MONGO_URI, ttl: 60 * 60 }),
      secret: environment.SECRET_SESSION,
      resave: true,
      saveUninitialized: true,
    */
//})
//);

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);

//console.log(argsUtil);
//console.log(environment);
