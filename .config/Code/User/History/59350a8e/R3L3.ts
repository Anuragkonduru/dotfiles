import { db } from "db/db";
import { user } from "../db/schema";
import { eq } from "drizzle-orm";

export async function createUserService(user_data: any): Promise<boolean> {
  const database = await db;
  try {
    const userCreated = await database
      .insert(user)
      .values(user_data)
      .returning({ insertedId: users.id });;
    console.log(userCreated);
    return true;
  } catch (error) {
    console.error("Failed to create user:", error);
    return false;
  }
}
export async function getUserService(user_id: number): Promise<any> {
  const database = await db;
  const user_data = await database.select().from(user).where(eq(user.user_id, user_id));
  return user_data;
}
