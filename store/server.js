import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import sessions from "express-session";
import MongoStore from "connect-mongo";

import indexRouter from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";
import dbConnect from "./src/utils/dbConnect.util.js";

//http server
const server = express();
const port = process.env.PORT || 9000;
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
server.use(cookieParser());
server.use(
  sessions({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: process.env.MONGO_URI, ttl: 60 * 60 }),
  })
);

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);
