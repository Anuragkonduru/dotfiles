import { cartModel } from "src/models/cart.model.js";

export const getCartItems = (userId: any) => {
  console.log(userId);
};
export const postCartItems = (req: any,res:any) => {
      const item_data: cartModel = {
        product_id: req.body.productId,
        username: req.body.userName,
        qty: req.body.qty,
        unit_price: req.body.unitPrice,
        total_price: req.body.totalPrice,
        created_at: new Date(req.body.createdAt),
        modified_at: new Date(req.body.modifiedAt),
      };
  console.log(item_data);
};

