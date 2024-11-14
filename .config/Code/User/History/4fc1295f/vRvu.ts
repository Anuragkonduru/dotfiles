import { cartModel } from "../models/cart.model.js";
import {
  getCartItemsService,
  postCartItemsService,
} from "../services/cart.service.js";

export const getCartItems = (req: any, res: any) => {
  try {
    const cart_data = await getCartItemsService(req.userName.id);
    console.log("cart_data");
    console.log(cart_data);
    res.status(200).json(cart_data);
  } catch (error) {
    res.status(400).json("couldn't get cart for user");
  }
};
export const postCartItems = async (req: any, res: any) => {
  try {
    const item_data: cartModel = {
      product_id: req.body.productId,
      username: req.userName.id,
      qty: req.body.qty,
      unit_price: req.body.unitPrice,
      total_price: req.body.totalPrice,
      created_at: new Date(req.body.createdAt),
      modified_at: new Date(req.body.modifiedAt),
    };

    const inserted = await postCartItemsService(item_data);
    if (inserted) {
      res.status(200).json("Added to Cart");
    }
    console.log(item_data);
  } catch (error) {
    res.status(400).json("cant add item to cart");
  }
};
