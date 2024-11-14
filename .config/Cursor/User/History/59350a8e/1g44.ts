import { db } from "db/db";
import { UserModel } from "models/user.model";
import { user} from "../db/schema";
export async function createUserService(user_data: UserModel):Promise<Boolean> {
  const database = await db;
    const userCreated = await database.insert(user).values(user_data);
  return false;
}}