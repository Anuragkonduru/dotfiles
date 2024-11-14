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

authRoutes.use("/Products",isValidToken, productRoutes);
authRoutes.post("/signup", signup_post);
authRoutes.post("/login", login_post);
authRoutes.post("/logout", logout);

authRoutes.get("/login", login_get);
authRoutes.get("/signup", signup_get);

export default authRoutes;
