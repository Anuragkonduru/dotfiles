import { UserModel } from "models/user.model";

export async function createUser(user: UserModel) {
  await user.create(user);
}