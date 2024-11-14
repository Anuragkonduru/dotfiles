import { date, int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const products = mysqlTable("products", {
  product_id: int("product_id").primaryKey(),
  productname: varchar("product_name", { length: 20 }),
  description: text("description"),
  category_id: int("category_id"),
  inventory_id: varchar("inventory_id", { length: 20 }),
  price: int("price"),
  review_id: varchar("review_id", { length: 20 }),
  created_at: date("created_at"),
  modified_at: date("modified_at"),
});
export const images = mysqlTable("image_data", {
  image_id: int("product_id").primaryKey(),
  product_id: varchar("product_name", { length: 10 }),
  link: varchar("inventory_id", { length: 20 }),
  color: varchar("review_id", { length: 20 }),
});
