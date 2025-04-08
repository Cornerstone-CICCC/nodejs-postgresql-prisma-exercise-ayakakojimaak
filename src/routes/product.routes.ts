import { Router } from "express";
import productController from "../controllers/product.controller";

const employeeRouter = Router();

employeeRouter.get("/", productController.getAllProduct);

export default employeeRouter;
