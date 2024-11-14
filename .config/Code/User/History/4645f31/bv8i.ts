import express from "express";
import { isValidToken } from "../models/user.model.js";
import {
  getCartItems,
  postCartItems,
} from "../controllers/cart.controller.js";


const cartRoutes = express.Router();

cartRoutes.get("/getCart", isValidToken, getCartItems);
cartRoutes.get("/postCart/:id", isValidToken, postCartItems);

export default cartRoutes;
