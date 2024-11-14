import {
  getAllProductsData,
  getProductDataById,
} from "../services/products.db";
const getAllProducts = async (_req: any, res: any) => {
  try {
    const data = await getAllProductsData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
