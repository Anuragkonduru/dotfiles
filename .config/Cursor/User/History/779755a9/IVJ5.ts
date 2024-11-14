import express from "express";
import productRoutes from "./products.route";

const authRoutes = express.Router();

authRoutes.use("/Products", productRoutes);
authRoutes.get("/signup", signup_get);
authRoutes.post("/signup", signup_post);
authRoutes.get("/login", login_get);
authRoutes.post("/login", login_post);

export default authRoutes;
