import { Router } from "express";
import notesManager from "../../data/fs/NotesManager.fs.js";
import isText from "../../middlewares/isText.mid.js";

const notesRouter = Router();

notesRouter.get("/", read);
notesRouter.get("/:nid", readOne);
notesRouter.post("/", isText, create);
notesRouter.put("/:nid", update);
notesRouter.delete("/:nid", destroy);

async function create(req, res, next) {
  try {
    const data = req.body;
    const one = await notesManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED ID: " + one.id,
    });
  } catch (error) {
    return next(error);
  }
}

async function read(req, res, next) {
  try {
    const { category } = req.query;
    const all = await notesManager.read(category);
    if (all.length > 0) {
      return res.json({
        statusCode: 200,
        response: all,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function readOne(req, res, next) {
  try {
    const { nid } = req.params;
    const one = await notesManager.readOne(nid);
    if (one) {
      return res.json({
        statusCode: 200,
        response: one,
      });
    } else {
      const error = new Error("Not found!");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    return next(error);
  }
}

async function update(req, res, next) {
  try {
    const { nid } = req.params;
    const data = req.body;
    const one = await notesManager.update(nid, data);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { nid } = req.params;
    const one = await notesManager.destroy(nid);
    return res.json({
      statusCode: 200,
      response: one,
    });
  } catch (error) {
    return next(error);
  }
}

export default notesRouter;
