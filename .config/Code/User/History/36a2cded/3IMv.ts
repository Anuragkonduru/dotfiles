import { getAllProducts, getProductById } from "controllers/products.controller";
import express from "express";


const productRoutes = express.Router();

productRoutes.get("/getAllProducts", getAllProducts);
productRoutes.get("/getProduct/:id", getProductById);

export default productRoutes;
