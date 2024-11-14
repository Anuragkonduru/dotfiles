import {
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const products = mysqlTable("products", {
  product_id: int("product_id").primaryKey(),
  productname: varchar("product_name", { length: 20 }),
  description: text("description"),
  category_id: int("category_id"),
  inventory_id: varchar("inventory_id", { length: 20 }),
  price: int("price"),
  review_id: varchar("review_id", { length: 20 }),
  created_at: timestamp("created_at").defaultNow().notNull(),
  modified_at: timestamp("modified_at").notNull(),
});

export const images = mysqlTable("image_data", {
  image_id: int("image_id").primaryKey(),
  product_id: varchar("product_id", { length: 10 }),
  link: varchar("link", { length: 20 }),
  color: varchar("color", { length: 20 }),
});
