import express from "express";
import {
  getAllProducts,
  getDealProducts,
  getProductById,
} from "../controllers/products.controller.js";
import { isValidToken } from "../models/user.model.js";

const productRoutes = express.Router();

productRoutes.get("/getAllProducts", isValidToken, getAllProducts);
productRoutes.post("/getProduct/:username", isValidToken, getProductById);


export default productRoutes;
