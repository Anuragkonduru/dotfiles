export const getCartItems = (userId: any) => {
  console.log(userId);
};
export const postCartItems = (req: any,res:any) => {
      const item_data: cartModel = {
        product_id: req.body.productId,
        userName: req.body.userName,
        first_name: req.body.req.body.,
        last_name: req.body.unitPrice,
        telephone: req.body.totalPrice,
        created_at: new Date(req.body.createdAt),
        modified_at: new Date(req.body.modifiedAt),
      };
  console.log(cartData);
};
export interface cartModel {
  productId: number;
  userName: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
  createdAt: Date;
  modifiedAt: Date;
}
