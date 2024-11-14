import { createUserService } from "services/user.service";

export const signup_get = (req: any, res: any) => {};
export const signup_post = (req: any, res: any) => {
    try {
      const user_data:UserModel = {
        name: "John Doe",
        email: "john@doe.com",
        password: "password",
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
