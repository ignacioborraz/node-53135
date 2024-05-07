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
  } catch (error) {
    return next(error);
  }
}

export default isText;
