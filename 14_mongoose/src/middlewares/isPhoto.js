function isPhoto(req, res, next) {
  try {
    if (req.file) {
      req.body.photo = "/public/assets/" + req.file.filename;
    }
    return next();
  } catch (error) {
    return next(error);
  }
}

export default isPhoto;
