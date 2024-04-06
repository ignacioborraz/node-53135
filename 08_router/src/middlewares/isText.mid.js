function isText(req, res, next) {
  try {
    const { text, category } = req.body;
    if (!text) {
      const err = new Error("Insert text!");
      err.statusCode = 400;
      throw err;
    }
/*     if (!category) {
      req.body.category = "to do";
    } */
    return next();
    //el next SOLITO me deja pasar hacia la función siguiente
  } catch (error) {
    return next(error);
    //el next con ERROR me deja pasar hacia el errorHandler
  }
}

export default isText;
