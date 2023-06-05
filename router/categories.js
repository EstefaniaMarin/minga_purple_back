import { Router } from "express"; 
import read from "../controllers/categories/read.js";
import exp from "constants";

const categoriesRouter = Router(); 

categoriesRouter.get("/", read ); 

export default categoriesRouter; 