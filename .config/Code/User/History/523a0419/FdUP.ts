import { and, eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { cart } from "../db/schema.js";
import { cartModel } from "../models/cart.model.js";
import { getProductByIdService } from "./products.service.js";

export async function postCartItemsService(item_data: any): Promise<boolean> {
  const database = await db;
  try {
    const productExists = await database
      .select({ qty: cart.qty })
      .from(cart)
      .where(
        and(
          eq(cart.product_id, item_data.product_id),
          eq(cart.username, item_data.userName)
        )
      );
    console.log("productExists");
    console.log(productExists);
    if (productExists.length !== 0) {
      let qty = 0;
      let total = 0;
      for (const item of productExists) {
        qty = (item.qty == null ? 0 : item.qty) + 1;
        total = item_data.unit_price * qty;
      }
      const CartItemUpdated = await database
        .update(cart)
        .set({
          qty: qty,
          unit_price: item_data.unit_price,
          total_price: total,
          modified_at: item_data.modified_at,
        })
        .where(
          and(
            eq(cart.product_id, item_data.product_id),
            eq(cart.username, item_data.userName)
          )
        );
      console.log("CartItemUpdated");
      console.log(CartItemUpdated);
      return true;
    } else {
      const CartItemAdded = await database.insert(cart).values(item_data);
      console.log("CartItemAdded");
      console.log(CartItemAdded);
      return true;
    }
  } catch (error) {
    console.error("Failed to at Item/moidify to Cart:", error);
    return false;
  }
}
export async function getCartItemsService(userName: string): Promise<any> {
  const database = await db;
  const cart_items = await database
    .select({
      product_id: cart.product_id,
      qty: cart.qty,
      unit_price: cart.unit_price,
      total_price: cart.total_price,
      created_at: cart.created_at,
    })
    .from(cart)
    .where(eq(cart.username, userName));

  const CartMappedData: cartModel[] = await cart_items.map(
    async (item) =>
      ({
        product_id: item.product_id,
        qty: item.qty,
        unit_price: item.unit_price,
        total_price: item.total_price,
        created_at: item.created_at,
        ProductsModel: await getProductByIdService(item.product_id),
      } as cartModel)
  );
  console.log("CartMappedData");
  console.log(CartMappedData);
  return CartMappedData;
}
