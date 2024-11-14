import express from "express";

import {
  login_post,
  logout,
  postLogin,
  postSignup,
  signup_post,
} from "../controllers/auth.controller.js";
import productRoutes from "./products.route.js";

const authRoutes = express.Router();
authRoutes.get("/", (_req: any, res: any) => {
  return res.send("Arc Stride Server Is Running");
});
authRoutes.use("/Products", productRoutes);
authRoutes.post("/signup", postSignup);
authRoutes.post("/login", postLogin);
authRoutes.post("/logout", logout);

export default authRoutes;
