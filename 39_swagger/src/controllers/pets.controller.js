//CONTROLADOR LLAMA A SERVICIO
import {
  createService,
  readAllService,
  readByIdService,
  updateService,
  destroyService,
} from "../services/pets.service.js";

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const one = await createService(data);
    return res.message201("CREATED ID: " + one._id);
  } catch (error) {
    return next(error);
  }
};
const readAll = async (req, res, next) => {
  try {
    //deberias condicionar las consultas para los FILTROS
    const all = await readAllService();
    if (all.length === 0) {
      return res.error404();
    }
    return res.response200(all);
  } catch (error) {
    return next(error);
  }
};
const readById = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const one = await readByIdService(pid);
    if (!one) {
      return res.error404();
    }
    return res.response200(one);
  } catch (error) {
    return next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const data = req.body;
    const one = await updateService(pid, data);
    if (!one) {
      return res.error404();
    }
    return res.response200(one);
  } catch (error) {
    return next(error);
  }
};
const destroy = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const one = await destroyService(pid);
    if (!one) {
      return res.error404();
    }
    return res.response200(one);
  } catch (error) {
    return next(error);
  }
};

export { create, readAll, readById, update, destroy };
