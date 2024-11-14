export const getCartItems = (userId: any) => {
  console.log(userId);
};
export const postCartItems = (req: any,res:any) => {
      const item_data: cartModel = {
        product_id: req.body.productId,
        username: req.body.userName,
        qty: req.body.qty,
        unitPunit_pricerice: req.body.unitPrice,
        total_price: req.body.totalPrice,
        created_at: new Date(req.body.createdAt),
        modified_at: new Date(req.body.modifiedAt),
      };
  console.log(cartData);
};
export interface cartModel {
  product_id: number;
  username: string;
  qty: number;
  unit_price: number;
  total_price: number;
  created_at: Date;
  modified_at: Date;
}
