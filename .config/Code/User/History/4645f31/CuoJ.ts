import express from "express";

import { isValidToken } from "../models/user.model.js";

const productRoutes = express.Router();

productRoutes.get("/CartData", isValidToken, );
productRoutes.post("/getProduct/:id", isValidToken, );
productRoutes.patch("/getDealProducts", isValidToken, );

export default productRoutes;
