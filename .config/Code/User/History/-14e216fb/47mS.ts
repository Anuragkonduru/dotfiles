import { mysqlTable, serial, varchar,int,text } from "drizzle-orm/mysql-core";

export const products = mysqlTable("product", {
  product_id: int("product_id").primaryKey(),
  productname: varchar("product_name", { length: 256 }),
  description: varchar("description", { length: 256 }),
  category_id: int("category_id"),
  inventory_id: varchar("inventory_id", { length: 256 }),
  price: int("price"),
  review_id: varchar("review_id", { length: 256 }),
  created_at: varchar("created_at", { length: 256 }),
  modified_at: varchar("modified_at", { length: 256 }),
});
