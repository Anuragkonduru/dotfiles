import express from "express";
import { login_get, login_post, logout, signup_get, signup_post, } from "../controllers/auth.controller.js";
import productRoutes from "./products.route.js";
const authRoutes = express.Router();
authRoutes.get("/", (_req, res) => {
    return res.send("Arc Stride Server Is Running");
});
authRoutes.use("/Products", productRoutes);
authRoutes.post("/signup", signup_post);
authRoutes.post("/login", login_post);
authRoutes.post("/logout", logout);
authRoutes.get("/login", login_get);
authRoutes.get("/signup", signup_get);
export default authRoutes;
