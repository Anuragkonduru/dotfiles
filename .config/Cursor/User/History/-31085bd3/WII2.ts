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
  images: ImageModel[];
}
export interface ImageModel {
  productId: number;
  link: string;
  color: string;
}

export function MapProductsData(productsData: any[], imagesData: any[]) {
  const imagesMappedData: ImageModel[] = imagesData.map((image) => ({
    productId: image.product_id!,
    link: image.link!,
    color: image.color!,
  }));
  const productsMappedData: ProductsModel[] = productsData.map(
    (product) =>
      ({
        productId: product.product_id,
        productname: product.productname,
        description: product.description,
        categoryId: product.category_id,
        inventoryId: product.inventory_id,
        price: product.price,
        discountId: product.discount_id,
        reviewId: product.review_id,
        createdAt: product.created_at,
        modifiedAt: product.modified_at,
        images: [
          ...imagesMappedData.filter(
            (image) => image.productId === product.product_id
          ),
        ],
      } as ProductsModel)
  );
  return productsMappedData;
}
