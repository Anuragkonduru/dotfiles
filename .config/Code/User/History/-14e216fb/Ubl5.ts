import { date, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  product_id: integer("product_id").primaryKey(),
  productname: varchar("product_name", { length: 20 }),
  description: text("description"),
  category_id: integer("category_id"),
  inventory_id: varchar("inventory_id", { length: 20 }),
  price: integer("price"),
  review_id: varchar("review_id", { length: 20 }),
  created_at: date("created_at"),
  modified_at: date("modified_at"),
});

export const images = pgTable("image_data", {
  image_id: integer("image_id").primaryKey(),
  product_id: varchar("product_id", { length: 10 }),
  link: varchar("link", { length: 20 }),
  color: varchar("color", { length: 20 }),
});
