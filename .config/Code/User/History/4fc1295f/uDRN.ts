import { cartModel } from "../models/cart.model.js";
import { getCartItems, postCartItems } from "../services/cart.service.js";

export const getCartItem = (req: any, res: any) => {
  try {
    const cart_data = getCartItems(req.userName);
    console.log(req.userName);
    res.status(200).json(cart_data);
  } catch (error) {
    res.status(400).json("couldn't get cart for user");
  }
};
export const postCartItem = (req: any, res: any) => {
  try {
    const item_data: cartModel = {
      product_id: req.body.productId,
      username: req.userName,
      qty: req.body.qty,
      unit_price: req.body.unitPrice,
      total_price: req.body.totalPrice,
      created_at: new Date(req.body.createdAt),
      modified_at: new Date(req.body.modifiedAt),
    };
postCartItems()
    console.log(item_data);
  } catch (error) {
    res.status(400).json("cant add item to cart");
  }
};
