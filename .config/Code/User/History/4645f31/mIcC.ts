import express from "express";
import {
  getAllProducts,
  getDealProducts,
  getProductById,
} from "../controllers/products.controller.js";
import { isValidToken } from "../models/user.model.js";
import { postCartItems } from "src/controllers/cart.controller.js";
import { getCartItems } from "src/controllers/cart.controller.js";

const cartRoutes = express.Router();

cartRoutes.get("/getCart", isValidToken, getCartItems);
cartRoutes.get("/getProduct/:id", isValidToken, postCartItems);

export default cartRoutes;
