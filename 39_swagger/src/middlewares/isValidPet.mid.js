const isValidPet = (req, res, next) => {
  const { name, specie } = req.body;
  if (!name || !specie) {
    return res.error400("Incomplete data on mid");
  }
  return next();
};

export default isValidPet;
