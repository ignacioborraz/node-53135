import { Router } from "express";
import notesRouter from "./notes.view.js";
import usersRouter from "./users.view.js";

const viewsRouter = Router();

viewsRouter.use("/notes", notesRouter);
viewsRouter.use("/users", usersRouter);
viewsRouter.get("/", (req, res, next) => {
  try {
    return res.render("index", { title: "HOME" });
  } catch (error) {
    return next(error);
  }
});

export default viewsRouter;
