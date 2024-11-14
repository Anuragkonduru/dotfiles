import { getAllProductsService, getDealProductsService, getProductByIdService } from "../services/products.service.js";
export const getAllProducts = async (_req, res) => {
    try {
        const data = await getAllProductsService();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await getProductByIdService(id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
export const getDealProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await getDealProductsService(id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
