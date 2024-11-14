import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export interface UserModel {
  user_id?: number;
  username: string;
  password: string;
  first_name: number;
  last_name: number;
  telephone: number;
  created_at: Date;
  modified_at: Date;
}

const secretKey: string = process.env["SECRET_KEY"]!.toString();
export async function genHash(password: any): Promise<any> {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export const maxAge = 3 * 24 * 60 * 60;
export const createJwtToken = (id: string) => {
  return jwt.sign({ id }, secretKey, { expiresIn: maxAge });
};
export const validateCredentials = async (
  userName: string,
  password: string,
  user_data: any
) => {
  if (user_data) {
    const passwordMatch = await bcrypt.compare(password, user_data.password);
    if (passwordMatch) {
      return userName;
    }
    throw Error("Invalid Password");
  }
  throw Error("Invalid User");
};

export const isValidToken = (req: any, res: any, next: any) => {
  try {
    const token = req.cookie.auth_token;
    if (token) {
      jwt.verify(token, secretKey, (err: any, decoded: any) => {
        if (err) {
          res.status(400).json("not a Valid Token");
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      res.status(400).json("not Logged in");
    }
  } catch (error) {
    console.log("token not provided from front End");
    res.status(400).json("token not provided ");
  }
};
