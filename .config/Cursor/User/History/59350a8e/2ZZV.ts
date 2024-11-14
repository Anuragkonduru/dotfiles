export async function createUser(user: UserModel) {
  await user.create(user);
}