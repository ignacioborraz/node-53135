import { Router } from "express";
import usersManager from "../../data/mongo/UsersManager.mongo.js";

const sessionsRouter = Router();

sessionsRouter.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const one = await usersManager.readByEmail(email);
    if (one.password === password) {
      req.session.email = email;
      req.session.online = true;
      req.session.role = one.role;
      req.session.user_id = one._id;
      return res.json({ statusCode: 200, message: "Logged in!" });
    }
    return res.json({ statusCode: 401, message: "Bad auth!" });
  } catch (error) {
    return next(error);
  }
});
sessionsRouter.get("/online", async (req, res, next) => {
  try {
    if (req.session.online) {
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
});
sessionsRouter.post("/signout", (req, res, next) => {
  try {
    req.session.destroy();
    return res.json({ statusCode: 200, message: "Signed out!" });
  } catch (error) {
    return next(error);
  }
});

export default sessionsRouter;
