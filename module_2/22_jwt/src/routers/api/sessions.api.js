import { Router } from "express";
import usersManager from "../../data/mongo/UsersManager.mongo.js";
import isValidUser from "../../middlewares/isValidUser.mid.js";
import isValidPassword from "../../middlewares/isValidPasword.mid.js";
import passport from "../../middlewares/passport.mid.js";
import isAuth from "../../middlewares/isAuth.mid.js";
import passportCb from "../../middlewares/passportCb.mid.js";

const sessionsRouter = Router();

sessionsRouter.post(
  "/register",
  //passport.authenticate("register", { session: false }),
  passportCb("register"),
  async (req, res, next) => {
    try {
      return res.json({ statusCode: 201, message: "Registered!" });
    } catch (error) {
      return next(error);
    }
  }
);
sessionsRouter.post(
  "/login",
  //passport.authenticate("login", { session: false }),
  passportCb("login"),
  async (req, res, next) => {
    try {
      return res.cookie("token", req.user.token, { signedCookie: true }).json({
        statusCode: 200,
        message: "Logged in!",
        //token: req.user.token,
      });
    } catch (error) {
      return next(error);
    }
  }
);
sessionsRouter.get(
  "/online",
  //passport.authenticate("jwt", { session: false }),
  passportCb("jwt"),
  async (req, res, next) => {
    //console.log(req.session);
    try {
      //if (req.session.online) {
      if (req.user.online) {
        return res.json({
          statusCode: 200,
          message: "Is online!",
          user_id: req.session.user_id,
        });
      }
      return res.json({
        statusCode: 401,
        message: "Bad auth!",
      });
    } catch (error) {
      return next(error);
    }
  }
);
sessionsRouter.post("/signout", (req, res, next) => {
  try {
    if (req.session.email) {
      req.session.destroy();
      return res.json({ statusCode: 200, message: "Signed out!" });
    }
    const error = new Error("Invalid credentials from signout");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    return next(error);
  }
});
sessionsRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
sessionsRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res, next) => {
    try {
      return res.json({ statusCode: 200, message: "Logged in with google!" });
    } catch (error) {
      return next(error);
    }
  }
);

export default sessionsRouter;
