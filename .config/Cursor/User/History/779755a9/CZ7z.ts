import express from "express";
import productRoutes from "./products.route";

const authRoutes = express.Router();

authRoutes.use("/Products", productRoutes);
authRoutes.get("/signup", productRoutes);
authRoutes.post("/signup", productRoutes);
authRoutes.get("/login", productRoutes);
authRoutes.post("/login", productRoutes);

export default authRoutes;
