export interface UserModel {
  create(user: UserModel): unknown;
  userId: number;
  usertName: string;
  password: string;
  first_name: number;
  last_name: number;
  telephone: number;
  created_at: Date;
  modified_at: Date;
}
