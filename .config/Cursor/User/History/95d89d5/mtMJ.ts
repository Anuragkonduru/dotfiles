import { eq } from "drizzle-orm";
import { MapProductsData } from "models/products.model";
import { db } from "../db/db";
import { images, products } from "../db/schema";

export async function getAllProductsService(): Promise<any> {
  const database = await db;
  const productsData = await database.select().from(products);

  const imagesData = await database.select().from(images);

  const productsMappedData = MapProductsData(productsData, imagesData);

  return productsMappedData;
}

export async function getProductByIdService(id: any): Promise<any> {
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

export async function searchProducts(query: string): Promise<any> {
  const database = await db;
  const productsData = await database
    .select()
    .from(products)
    .where(products.productname.like(`%${query}%`));

