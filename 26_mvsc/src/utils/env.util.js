import { config } from "dotenv";
import argsUtil from "./args.util.js";

const { env } = argsUtil;

//si env es dev debo usar env.dev
//si env es prod debo usar env.prod
const path = env === "prod" ? "./.env.prod" : "./.env.dev";
config({ path });

const environment = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  SECRET_COOKIE: process.env.SECRET_COOKIE,
  SECRET_SESSION: process.env.SECRET_SESSION,
  SECRET_JWT: process.env.SECRET_JWT,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
};

export default environment;
