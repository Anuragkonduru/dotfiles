export async function createUser(user: any) {
  await user.create(user);
}