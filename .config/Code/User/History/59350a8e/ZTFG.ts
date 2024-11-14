
import { eq } from "drizzle-orm";
import { db } from "src/db/db.js";


export async function createUserService(user_data: any): Promise<boolean> {
  const database = await db;
  try {
    const userCreated = await database.insert(user).values(user_data);
    // console.log(userCreated);
    return true;
  } catch (error) {
    console.error("Failed to create user:", error);
    return false;
  }
}
export async function getUserService(userName: string): Promise<any> {
  const database = await db;
  const user_data = await database
    .select({ username: user.username, password: user.password })
    .from(user)
    .where(eq(user.username, userName));
  console.log(user_data);
  return user_data[0];
}
