import { db } from "./db";
import { products } from "./schema";

async function reinit() {
  await db.delete(products);
  const product_insert =await db.insert(products).values({
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
  });
}
reinit();
