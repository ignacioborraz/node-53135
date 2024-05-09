import { Router } from "express";
import usersManager from "../../data/mongo/UsersManager.mongo.js";
import isValidData from "../../middlewares/isValidData.mid.js";
import isValidEmail from "../../middlewares/isValidEmail.mid.js";
import isValidUser from "../../middlewares/isValidUser.mid.js";
import isValidPass from "../../middlewares/isValidPass.mid.js";

const sessionsRouter = Router();

sessionsRouter.post("/register", isValidData, isValidEmail, register);
sessionsRouter.post("/login", isValidUser, isValidPass, login);
sessionsRouter.post("/signout", signout);

async function register(req, res, next) {
  try {
    const data = req.body;
    await usersManager.create(data);
    return res.json({
      statusCode: 201,
      message: "Registered!",
    });
  } catch (error) {
    return next(error);
  }
}
async function login(req, res, next) {
  try {
    const { email } = req.body;
    const one = await usersManager.readByEmail(email);
    req.session.email = email;
    req.session.role = one.role;
    return res.json({
      statusCode: 200,
      message: "Logged in!",
    });
  } catch (error) {
    return next(error);
  }
}
async function signout(req, res, next) {
  try {
    if (req.session.email) {
      req.session.destroy();
      return res.json({
        statusCode: 200,
        message: "Signed out!",
      });
    }
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    return next(error);
  }
}

export default sessionsRouter;
