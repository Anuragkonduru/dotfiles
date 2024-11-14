import express from "express";
import { isValidToken } from "models/user.model";
import {
  getAllProducts,
  getDealProducts,
  getProductById,
} from "../controllers/products.controller.js";

const productRoutes = express.Router();

productRoutes.get("/getAllProducts", isValidToken, getAllProducts);
productRoutes.get("/getProduct/:id", isValidToken, getProductById);
productRoutes.get("/getDealProducts", getDealProducts);

export default productRoutes;
