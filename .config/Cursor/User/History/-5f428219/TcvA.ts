import { createUserService } from "services/user.service";

export const signup_get = (req: any, res: any) => {};
export const signup_post = (req: any, res: any) => {
    try {
      const user_data: UserModel = {
        user_id: user_data.user_id,
        modified_at: user_data.modified_at,
        created_at: user_data.created_at,
        name: user_data.name,
        email: user_data.email,
        telephone: user_data.telephone,
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
