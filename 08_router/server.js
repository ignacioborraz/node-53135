import express from "express";
import indexRouter from "./src/router/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";

const server = express();
const port = 9000;
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);
