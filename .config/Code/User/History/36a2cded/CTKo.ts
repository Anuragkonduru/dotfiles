import express from "express";

const routes = express.Router()

routes.get("/",  try {
    const data = await getAllProducts();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  })