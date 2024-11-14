export async function createUser(user: any) {
  await User.create(user);
}