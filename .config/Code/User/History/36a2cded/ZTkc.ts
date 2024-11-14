import express from "express";
import { getAllProducts, getProductById } from "../services/products.db";

const productRoutes = express.Router();

productRoutes.get("/getAllProducts", getAllProducts);
productRoutes.get("/getProduct/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getProductById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default productRoutes;
