import {
  getAllProductsService,
  getDealProductsService,
  getProductByIdService,
} from "../services/products.service.js";

export const getAllProducts = async (_req: any, res: any) => {
  try {
    const data = await getAllProductsService();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getProductById = async (req: any, res: any) => {
  try {
    const id = req.params.id;
    console.log("ID");
    console.log(id);
    const data = await getProductByIdService(id);
    console.log("data");
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getDealProducts = async (req: any, res: any) => {
  try {
    const id = req.params.id;
    const data = await getDealProductsService(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
