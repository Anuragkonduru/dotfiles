import { ProductsModel } from "./products.model.js";

export interface cartModel {
  product_id: number;
  username: string;
  qty: number;
  unit_price: number;
  total_price: number;
  created_at: Date;
  modified_at: Date;
  ProductsModel?:ProductsModel;
}
