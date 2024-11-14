import {
  int,
  mysqlTable,
  primaryKey,
  serial,
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
  discount_id: varchar("discount_id", { length: 20 }),
  review_id: varchar("review_id", { length: 20 }),
  created_at: timestamp("created_at").defaultNow().notNull(),
  modified_at: timestamp("modified_at").notNull(),
});

export const images = mysqlTable("image_data", {
  image_id: int("image_id").primaryKey(),
  // product_id: int("product_id").references(() => products.product_id),
  product_id: int("product_id"),
  link: varchar("link", { length: 200 }),
  color: varchar("color", { length: 20 }),
});

export const user = mysqlTable("user", {
  user_id: serial("user_id").primaryKey(),
  username: varchar("user_name", { length: 20 }).unique(),
  password: varchar("password", { length: 72 }),
  first_name: varchar("first_name", { length: 20 }),
  last_name: varchar("last_name", { length: 20 }),
  telephone: varchar("telephone", { length: 15 }),
  created_at: timestamp("created_at").defaultNow().notNull(),
  modified_at: timestamp("modified_at").notNull(),
});
export const cart = mysqlTable(
  "cart",
  {
    cart_id: serial("item_id"),
    product_id: int("product_id"),
    username: varchar("user_name", { length: 20 }),
    qty: int("qty"),
    unit_price: int("unit_price"),
    total_price: int("total_price").as((table)=>{}),
    created_at: timestamp("created_at").defaultNow().notNull(),
    modified_at: timestamp("modified_at").notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.product_id, table.username] }),
    };
  }
);
