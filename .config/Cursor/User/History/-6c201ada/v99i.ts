export interface UserModel {
  userId: number;
  User: string;
  description: string;
  categoryId: number;

}

  user_id: int("product_id").primaryKey(),
  usertname: varchar("product_name", { length: 20 }),
  password: varchar("product_name", { length: 72 }),
  first_name: varchar("product_name", { length: 20 }),
  last_name: varchar("product_name", { length: 20 }),
  telephone: varchar("product_name", { length: 15 }),
  created_at: timestamp("created_at").defaultNow().notNull(),
  modified_at: timestamp("modified_at").notNull(),