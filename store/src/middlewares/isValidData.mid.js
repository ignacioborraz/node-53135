export default async function isValidData(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email) {
      const error = new Error("Enter an email!");
      error.statusCode = 400;
      throw error;
    }
    if (!password) {
      const error = new Error("Enter password!");
      error.statusCode = 400;
      throw error;
    }
    return next();
  } catch (error) {
    return next(error);
  }
}
