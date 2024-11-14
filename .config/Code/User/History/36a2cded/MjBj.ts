import express from "express";
import { getAllProducts, getProductById } from "../db/products";

const routes = express.Router();

routes.get("/getAllProducts", async (req, res) => {
  try {
    const data = await getAllProducts();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});
routes.get("/getProduct/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getProductById(id);
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default routes;
