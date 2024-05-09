import usersManager from "../data/mongo/UsersManager.mongo.js";

export default async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const formPassword = password;
    const one = await usersManager.readByEmail(email);
    const mongoPassword = one.password;
    if (formPassword === mongoPassword) {
      return next();
    }
    const error = new Error("Invalid credentials");
    error.statusCode = 401;
    throw error;
  } catch (error) {
    return next(error);
  }
}
