import express from "express";
import { getCartItems, postCartItems } from "../controllers/cart.controller.js";
import { isValidToken } from "../models/user.model.js";

const cartRoutes = express.Router();

cartRoutes.get("/getCart", isValidToken, getCartItems);
cartRoutes.post("/postCart", isValidToken, postCartItems);

export default cartRoutes;
