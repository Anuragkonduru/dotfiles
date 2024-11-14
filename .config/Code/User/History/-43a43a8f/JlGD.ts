export interface cartModel{
    product_id: number,
    username: varchar("user_name", { length: 20 }),
    qty: number,
    unit_price: int("unit_price"),
    total_price: int("total_price"),
    created_at: timestamp("created_at").defaultNow().notNull(),
    modified_at: timestamp("modified_at").notNull(),
}