import {
  getAllProducts,
  getProductById,
  getDealProducts,
} from "../controllers/products.controller";
import express from "express";


const productRoutes = express.Router();

productRoutes.get("/getAllProducts", getAllProducts);
productRoutes.get("/getProduct/:id", getProductById);
productRoutes.get("/getDealProducts", getDealProducts);

export default productRoutes;
