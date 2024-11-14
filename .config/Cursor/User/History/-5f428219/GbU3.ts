import { UserModel } from "models/user.model";
import { createUserService } from "services/user.service";

export const signup_get = (req: any, res: any) => {};
export const signup_post = async (req: any, res: any) => {
  try {
    const user_data: UserModel = {
      user_id: req.body.user_id,
      username: req.body.username,
      password: req.body.user_id,
      first_name: req.body.user_id,
      last_name: req.body.user_id,
      telephone: req.body.user_id,
      created_at: new Date(),
      modified_at: new Date(),
    };
    await createUserService(user_data);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const login_get = (req: any, res: any) => {
  res.send("Hello World");
};
export const login_post = (req: any, res: any) => {
  res.send("Hello World");
};
export const logout = (req: any, res: any) => {
  res.send("Hello World");
};
