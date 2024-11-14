import { UserModel } from "models/user.model";
import { createUserService } from "services/user.service";

export const signup_get = (req: any, res: any) => {};
export const signup_post = (req: any, res: any) => {
    try {
      const user_data: UserModel = {
        userId: req.params.user_id,
        modified_at: req.params.modified_at,
        created_at: req.params.created_at,
        name: req.params.name,
        email: req.params.email,
        telephone: req.params.telephone,
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
