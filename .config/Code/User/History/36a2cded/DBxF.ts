import { isValidToken } from "models/user.model";
import {
  getAllProducts,
  getProductById,
  getDealProducts,
} from "../controllers/products.controller";
import express from "express";


const productRoutes = express.Router();

productRoutes.get("/getAllProducts", getAllProducts);
productRoutes.get("/getProduct/:id", isValidToken,getProductById);
productRoutes.get("/getDealProducts", isValidToken,getDealProducts);

export default productRoutes;
