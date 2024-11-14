import express from "express";

import {
  logout,
  postLogin,
  postSignup,
} from "../controllers/auth.controller.js";
import cartRoutes from "./cart.route.js";
import productRoutes from "./products.route.js";

const authRoutes = express.Router();
authRoutes.get("/", (_req: any, res: any) => {
  return res.send("Arc Stride Server Is Running");
});
authRoutes.use("/Products", productRoutes);
authRoutes.use("/Cart", cartRoutes);
authRoutes.post("/signup", postSignup);
authRoutes.post("/login", postLogin);
authRoutes.get("/logout", logout);

export default authRoutes;
