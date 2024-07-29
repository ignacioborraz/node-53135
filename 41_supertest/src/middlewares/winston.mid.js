import log from "../utils/winston.util.js";

function winston(req, res, next) {
  req.logger = log;
  const message = `${req.method} ${
    req.url
  } - ${new Date().toLocaleTimeString()}`;
  req.logger.HTTP(message);
  return next();
}

export default winston;
