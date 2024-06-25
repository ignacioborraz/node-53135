import { verifyToken } from "../utils/token.util.js";

function isAuth(req, res, next) {
  try {
    const { token } = req.cookies;
    console.log(token);
    const data = verifyToken(token);
    console.log(data);
    if (data) {
      req.user = data;
      return next();
    } else {
      const error = new Error("Forbidden");
      error.statusCode = 403;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

export default isAuth;
