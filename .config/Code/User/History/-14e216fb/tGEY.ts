import { int, mysqlTable, text } from "drizzle-orm/mysql-core";

export const products = mysqlTable("product", {
  product_id: int("product_id").primaryKey(),
  productname: text("product_name"),
  description: text("description"),
  category_id: int("category_id"),
  inventory_id: text("inventory_id"),
  price: int("price"),
  review_id: text("review_id"),
  created_at: text("created_at"),
  modified_at: text("modified_at"),
});
export const products = mysqlTable("product", {
  product_id: int("product_id").primaryKey(),
  productname: text("product_name"),
  description: text("description"),
  category_id: int("category_id"),
  inventory_id: text("inventory_id"),
  price: int("price"),
  review_id: text("review_id"),
  created_at: text("created_at"),
  modified_at: text("modified_at"),
});
