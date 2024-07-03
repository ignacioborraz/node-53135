//CONTROLADOR LLAMA A SERVICIO

import { readByEmailService, updateService } from "../services/auth.service.js";

const register = async (req, res, next) => {
  try {
    return res.message201("User registered!");
  } catch (error) {
    return next(error);
  }
};
const login = async (req, res, next) => {
  try {
    return res.cookie("token", req.token).message200("User logged in!");
  } catch (error) {
    return next(error);
  }
};

const verifyCode = async (req, res, next) => {
  const { email, code } = req.body;
  const one = await readByEmailService(email);
  const verify = code === one.verifyCode;
  console.log(one);
  console.log(code);
  if (verify) {
    await updateService(one._id, { verify });
    return res.message200("Verified User!");
  } else {
    return res.error400("Invalid credentials!");
  }
};

export { register, login, verifyCode };
