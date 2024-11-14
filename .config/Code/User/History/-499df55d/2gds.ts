import {
  getAllProductsData,
  getProductDataById,
} from "../services/products.db";
export const getAllProducts = async (_req: any, res: any) => {
  try {
    const data = await getAllProductsData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getProductById = async (req: any, res: any) => {
  try {
    const id = req.params.id;
    const data = await getProductDataById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
