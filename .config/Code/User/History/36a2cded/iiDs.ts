import { getAllProducts } from "controllers/products.controller";
import express from "express";


const productRoutes = express.Router();

productRoutes.get("/getAllProducts", getAllProducts);
productRoutes.get("/getProduct/:id", );

export default productRoutes;
