import { int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const products = mysqlTable("products", {
  product_id: int("product_id").primaryKey(),
  productname: varchar("product_name", { length: 256 }),
  description: text("description"),
  category_id: int("category_id"),
  inventory_id: varchar("inventory_id", { length: 256 }),
  price: int("price"),
  review_id: varchar("review_id", { length: 256 }),
  created_at: varchar("created_at", { length: 256 }),
  modified_at: varchar("modified_at", { length: 256 }),
});
export const images = mysqlTable("image_info", {
  image_id: int("product_id").primaryKey(),
  product_id: varchar("product_name", { length: 256 }),
  link: varchar("inventory_id", { length: 256 }),
  color: varchar("review_id", { length: 256 }),
});
