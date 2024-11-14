export interface CartModel {
  productId: number;
  userName: string;
  qty: number;
  unitPrice: number;
  totalPrice: number;
  createdAt: Date;
  modifiedAt: Date;
  ProductsModel: ProductsModel;
}
