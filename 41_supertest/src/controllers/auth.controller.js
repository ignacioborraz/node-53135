//CONTROLADOR LLAMA A SERVICIO

import { readByEmailService, updateService, destroyService } from "../services/auth.service.js";

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

const signout = async (req, res, next) => {
  try {
    return res.clearCookie("token").message200("Signed out!");
  } catch (error) {
    return res.error400("Invalid credentials!");
  }
};

const destroy = async (req, res, next) => {
  try {
    await destroyService(req.params.id)
    return res.message200("User deleted!");
  } catch (error) {
    console.log(error);
    return res.error400("Invalid credentials!");
  }
};

export { register, login, verifyCode, signout, destroy };
