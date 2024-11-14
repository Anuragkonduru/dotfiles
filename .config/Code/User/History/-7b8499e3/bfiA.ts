import { ProductsModel } from "./productmodel";

export interface CartModel {
  productId: number;
  qty: number;
  unitPrice: number;
  totalPrice: number;
  createdAt: Date;
  modifiedAt: Date;
  ProductsModel?: ProductsModel;
}


product;