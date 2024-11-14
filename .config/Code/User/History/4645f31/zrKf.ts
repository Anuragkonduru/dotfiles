import express from "express";
import {
  getAllProducts,
  getDealProducts,
  getProductById,
} from "../controllers/products.controller.js";
import { isValidToken } from "../models/user.model.js";

const cartRoutes = express.Router();

cartRoutes.get("/getCart", isValidToken, getAllProducts);
cartRoutes.get("/getProduct/:id", isValidToken, getProductById);

export default cartRoutes;
