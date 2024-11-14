export interface ProductsModel {
  productId: number;
  productname: string;
  description: string;
  categoryId: number;
  inventoryId: string;
  price: number;
  discountId: string;
  reviewId: string;
  createdAt: Date;
  modifiedAt: Date;
  Images: ImageModel[];
}
export interface ImageModel {
  productId: number;
  link: string;
  color: string;
}
