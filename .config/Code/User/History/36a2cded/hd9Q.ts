import express from "express";
import {
  getAllProducts,
  getDealProducts,
  getProductById,
} from "../controllers/products.controller.js";
import { isValidToken } from "../models/user.model.js";

const productRoutes = express.Router();

productRoutes.get("/getAllProducts", isValidToken, getAllProducts);
productRoutes.get("/getProduct/:username", isValidToken, getProductById);
productRoutes.get("/getDealProducts", getDealProducts);

export default productRoutes;
