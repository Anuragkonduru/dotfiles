import express from "express";
import productRoutes from "./products.route";

const routes = express.Router();

routes.use("/Products", productRoutes);
