import usersManager from "../data/mongo/UsersManager.mongo.js";

async function isValidPassword(req, res, next) {
  try {
    const { email, password } = req.body;
    const one = await usersManager.readByEmail(email);
    if (one.password === password) {
      return next();
    }
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    return next(error);
  }
}

export default isValidPassword;
