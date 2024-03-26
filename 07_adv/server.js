import express from "express";
import notesManager from "./data/fs/NotesManager.fs.js";

//server
const server = express();
const port = 8000;
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready);

//middlewares
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//router
server.get("/api/notes", async (req, res) => {
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
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
});
server.get("/api/notes/:nid", async (req, res) => {
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
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
});

const create = async (req, res) => {
  try {
    const data = req.body;
    const one = await notesManager.create(data);
    return res.json({
      statusCode: 201,
      message: "CREATED ID: " + one.id,
    });
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
};

const update = async (req, res) => {
  try {
    const { nid } = req.params
    const data = req.body
    const one = await notesManager.update(nid,data)
    return res.json({
      statusCode: 200,
      response: one
    })
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
};

const destroy = async(req,res)=>{
  try {
    const { nid } = req.params
    const one = await notesManager.destroy(nid)
    return res.json({
      statusCode: 200,
      response: one
    })
  } catch (error) {
    return res.json({
      statusCode: error.statusCode || 500,
      message: error.message || "CODER API ERROR",
    });
  }
}

server.post("/api/notes", create);
server.put("/api/notes/:nid", update);
server.delete("/api/notes/:nid", destroy)
