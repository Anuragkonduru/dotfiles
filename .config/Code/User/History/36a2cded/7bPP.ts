import { getAllProducts, getProductById } from "../db/products";
import express from "express";

const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const data = await getAllProducts();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});
routes.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getProductById(id);
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});
