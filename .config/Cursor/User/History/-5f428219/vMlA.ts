import { UserModel } from "models/user.model";
import { createUserService } from "services/user.service";

export const signup_get = (req: any, res: any) => {};
export const signup_post = async (req: any, res: any) => {
  try {
    const user_data: UserModel = {
      user_id: req.body.userId,
      username: req.body.userName,
      password: req.body.password,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      telephone: req.body.telephone,
      created_at: new Date(),
      modified_at: new Date(),
    };
    const user_created = await createUserService(user_data);
    // console.log(user_data);
    if (user_created) res.status(200).json("user Created");
    else res.status(500).json("user not Created");
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
