import { eq } from "drizzle-orm";
import { db } from "./db";
import { ImageModel, ProductsModel } from "./productModel";
import { images, products } from "./schema";
import { MapProductsData } from "models/products.model";

export async function getAllProducts(): Promise<any> {
  const database = await db;
  const productsData = await database.select().from(products);

  const imagesData = await database.select().from(images);

  const productsMappedData = MapProductsData(productsData, imagesData);

  return productsMappedData;
}

export async function getProductById(id: any): Promise<any> {
  const database = await db;
  const productData = await database
    .select()
    .from(products)
    .where(eq(products.product_id, id))
    .limit(1);

  if (!productData) {
    return null;
  }

  const imagesData = await database
    .select()
    .from(images)
    .where(eq(images.product_id, id));

  const productMappedData = MapProductsData(productData, imagesData);

  return productMappedData;
}

