import express from "express";
import { isValidToken } from "models/user.model";
import {
  getAllProducts,
  getDealProducts,
  getProductById,
} from "../controllers/products.controller";

const productRoutes = express.Router();

productRoutes.get("/getAllProducts", getAllProducts);
productRoutes.get("/getProduct/:id", isValidToken, getProductById);
productRoutes.get("/getDealProducts", isValidToken, getDealProducts);

export default productRoutes;
