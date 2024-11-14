import { db } from "db/db";
import { UserModel } from "models/user.model";
import { user} from "../db/schema";
export async function createUserService(user_data: any): Promise<boolean> {
  const database = await db;
  try {
    const userCreated = await database.insert(user).values(user_data);
    return true;
  } catch (error) {
    console.error("Failed to create user:", error);
    return false;
  }
}
