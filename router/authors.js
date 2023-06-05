import { Router } from "express";
import read from "../controllers/authors/read.js";

const authorsRouter = Router();

authorsRouter.get("/", read );

export default authorsRouter;