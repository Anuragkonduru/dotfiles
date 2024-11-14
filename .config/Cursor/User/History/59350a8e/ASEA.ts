export async function UserModel(user: any) {
  await user.create(user);
}