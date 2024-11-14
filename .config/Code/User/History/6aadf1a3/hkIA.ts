import { connect, db } from "./db";
import { products } from "./schema";

const insert_data = [
  {
    product_id: 1000001,
    productname: "Arc stride Casual",
    description: "Breathable mesh keeps your feet cool and comfy all day.",
    category_id: 1,
    inventory_id: "Stock_001",
    price: 1000,
    discount_id: "discount_001",
    review_id: "review_001",
    created_at: new Date(),
    modified_at: new Date(),
  },

];

export async function reinit() {
  const connection = await connect;
  const database = await db;
  await database.delete(products);
  await database.insert(products).values();
  connection.end();
  return true;
}
