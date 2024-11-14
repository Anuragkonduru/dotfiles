export interface cartModel{
        cart_id: serial("item_id"),
    product_id: int("product_id"),
    username: varchar("user_name", { length: 20 }),
    qty: int("qty"),
    unit_price: int("unit_price"),
    total_price: int("total_price"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    modified_at: timestamp("modified_at").notNull(),
}