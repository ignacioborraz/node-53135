import express from "express";
import indexRouter from "./src/router/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import __dirname from "./utils.js";

const server = express();
const port = 9000;
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/igna", express.static("igna"));
//server.use(express.static("public"));
server.use(express.static(__dirname + "/public"));
//a la carpeta public NO conviene ponerle un prefijo virtual "/public"
//como no configuro prefijo virtual public: ACCEDO A CUALQUIER ARCHIVO DIRECTAMENTE!!! (no necesito /public)

//endpoints
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHandler);
