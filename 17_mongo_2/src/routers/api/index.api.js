import { Router } from "express";
import notesRouter from "./notes.api.js";
import usersRouter from "./users.api.js";

const apiRouter = Router();

apiRouter.use("/notes", notesRouter);
apiRouter.use("/users", usersRouter);

export default apiRouter;
