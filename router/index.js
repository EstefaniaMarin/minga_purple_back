import { Router } from "express";
import usersRouter from "./auth.js";
import authorsRouter from "./authors.js";
import mangasRouter from "./mangas.js";
import chaptersRouter from "./chapter.js";
import categoriesRouter from "./categories.js";

const indexRouter = Router();

indexRouter.use("/auth", usersRouter);
indexRouter.use("/authors", authorsRouter);
indexRouter.use("/mangas", mangasRouter);
indexRouter.use("/chapters", chaptersRouter);
indexRouter.use("/categories", categoriesRouter); 

export default indexRouter;