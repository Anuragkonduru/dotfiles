import { db } from "db/db";
import { UserModel } from "models/user.model";

export async function createUser(user: UserModel) {
  const database = await db;
  const user_data = await database.collection("users").add(user);
  return user;
}