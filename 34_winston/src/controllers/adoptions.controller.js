//CONTROLADOR LLAMA A SERVICIO
import { createService, paginateService, readByIdService } from "../services/adoptions.service.js";
import { updateService } from "../services/pets.service.js";

const create = async (req, res, next) => {
  try {
    let { uid, pid } = req.params;
    let adopted = { adopted: true };
    await updateService(pid, adopted);
    let data = { owner: uid, pet: pid };
    let response = await createService(data);
    return res.message201("CREATED ID: " + response._id);
  } catch (error) {
    return next(error);
  }
};

const readAll = async (req, res, next) => {
  try {
    let queries = {
      page: 1,
      limit: 4,
      skip: 0,
    };
    req.query.page && (queries.page = req.query.page);
    req.query.limit && (queries.limit = Number(req.query.limit));
    queries.skip = (queries.page - 1) * queries.limit;
    let response = await paginateService(queries);
    if (response.docs.length > 0) {
      return res.response200(payload);
    }
    return res.error404();
  } catch (error) {
    return next(error);
  }
};

const read = async (req, res, next) => {
  try {
    let { aid } = req.params;
    let response = await readByIdService(aid);
    if (response) {
      return res.response200(response);
    }
    return res.error404();
  } catch (error) {
    error.where = "controller";
    return next(error);
  }
};

export { create, readAll, read };
