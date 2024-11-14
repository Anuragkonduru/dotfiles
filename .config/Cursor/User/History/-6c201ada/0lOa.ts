import bcrypt from "bcrypt";
export interface UserModel {
  user_id: number;
  username: string;
  password: string;
  first_name: number;
  last_name: number;
  telephone: number;
  created_at: Date;
  modified_at: Date;
}

export async function genHash(password: any): Promise<any> {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}
