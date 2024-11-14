import "dotenv/config";
import {
  UserModel,
  createJwtToken,
  genHash,
  maxAge,
  validateCredentials,
} from "models/user.model";
import { createUserService, getUserService } from "services/user.service";

export const signup_post = async (req: any, res: any) => {
  try {
    const hashedPassword = await genHash(req.body.password);
    const user_data: UserModel = {
      username: req.body.userName,
      password: hashedPassword,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      telephone: req.body.telephone,
      created_at: new Date(req.body.createdAt),
      modified_at: new Date(req.body.modifiedAt),
    };
    const user_created = await createUserService(user_data);

    if (user_created) {
      const token = createJwtToken(user_data.username);
      res.cookie("sessionToken", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
      });
      res.status(200).json(user_data.username);
    } else res.status(500).json("user not Created");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login_post = async (req: any, res: any) => {
  try {
    const { userName, password } = req.body;
    const user_data = await getUserService(userName);
    const validUser = await validateCredentials(userName, password, user_data);
    res.status(200).json(validUser);
    console.log(user_data);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const logout = (req: any, res: any) => {
  res.send("Hello World");
};

export const signup_get = (req: any, res: any) => {};

export const login_get = async (req: any, res: any) => {};
