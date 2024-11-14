import {
  login_get,
  login_post,
  logout,
  signup_get,
  signup_post,
} from "controllers/auth.controller";
import express from "express";
import productRoutes from "./products.route";

const authRoutes = express.Router();

authRoutes.use("/Products", productRoutes);
authRoutes.post("/signup", signup_post);
authRoutes.get("/signup", signup_get);
authRoutes.get("/login", login_get);
authRoutes.post("/login", login_post);
authRoutes.post("/logout", logout);

export default authRoutes;
