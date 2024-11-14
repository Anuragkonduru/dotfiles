import { db } from "db/db";
import { UserModel } from "models/user.model";
import { user} from "../db/schema";
export async function createUserService(user_data: UserModel): Promise<boolean> {
  const database = await db;
  try {
    const userCreated = await database.insert(user).values({
      user_id: user_data.user_id,
      modified_at: user_data.modified_at,
      created_at: user_data.created_at,
      name: user_data.name,
      email: user_data.email,
      telephone: user_data.telephone
    });
    return true;
  } catch (error) {
    console.error("Failed to create user:", error);
    return false;
  }
}
