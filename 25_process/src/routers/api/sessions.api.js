import CustomRouter from "../CustomRouter.js";
import passport from "../../middlewares/passport.mid.js";
import passportCb from "../../middlewares/passportCb.mid.js";

class SessionsRouter extends CustomRouter {
  init() {
    this.create("/register", ["PUBLIC"], passportCb("register"), register);
    this.create("/login", ["PUBLIC"], passportCb("login"), login);
    this.read("/online", ["USER", "ADMIN"], passportCb("jwt"), profile);
    this.create("/signout", ["USER", "ADMIN"], signout);
    this.read("/google",["PUBLIC"], passport.authenticate("google", { scope: ["email", "profile"] }));
    this.read("/google/callback", ["PUBLIC"], passport.authenticate("google", { session: false }), google);
  }
}

const sessionsRouter = new SessionsRouter();
export default sessionsRouter.getRouter();

async function register(req, res, next) {
  try {
    return res.message201("Registered!");
  } catch (error) {
    return next(error);
  }
}
async function login(req, res, next) {
  try {
    return res
      .cookie("token", req.user.token, { signedCookie: true })
      .message200("Logged in!");
  } catch (error) {
    return next(error);
  }
}
async function profile(req, res, next) {
  try {
    if (req.user.online) {
      return res.response200(req.user);
    }
    const error = new Error("Bad auth");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    return next(error);
  }
}
function signout(req, res, next) {
  try {
    if (req.user) {
      return res.message200("Signed out!");
    }
    const error = new Error("Invalid credentials from signout");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    return next(error);
  }
}
function google(req, res, next) {
  try {
    return res.message200("Logged in with google!");
  } catch (error) {
    return next(error);
  }
}
