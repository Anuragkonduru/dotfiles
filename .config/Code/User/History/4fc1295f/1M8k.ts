export const getCartItems = (userId: any) => {
  console.log(userId);
};
export const postCartItems = (cartData: any) => {
      const item_data: UserModel = {
        product_id: req.body.productId,
        userName: userName,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        telephone: req.body.telephone,
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
