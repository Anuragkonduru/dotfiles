import express from "express";

import { isValidToken } from "../models/user.model.js";

const productRoutes = express.Router();

productRoutes.get("/CartData", isValidToken, );
productRoutes.post("/AddToCart/:id", isValidToken);
productRoutes.patch("/UpdateCartQty/:id", isValidToken, );
productRoutes.patch("/UpdateQty/:id", isValidToken, );

export default productRoutes;
