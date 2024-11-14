import "dotenv/config";
import { createJwtToken, genHash, maxAge, validateCredentials, } from "../models/user.model.js";
import { createUserService, getUserService } from "../services/user.service.js";
export const signup_post = async (req, res) => {
    try {
        const hashedPassword = await genHash(req.body.password);
        const user_data = {
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
            res.cookie("auth_token", token, {
                // httpOnly: true,
                maxAge: maxAge * 1000,
            });
            res.status(200).json(user_data.username);
        }
        else
            res.status(500).json("user not Created");
    }
    catch (error) {
        res.status(500).json(error);
    }
};
export const login_post = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user_data = await getUserService(userName);
        console.log(password, user_data.password);
        const validUser = await validateCredentials(userName, password, user_data);
        const token = createJwtToken(user_data.username);
        res.cookie("auth_token", token, {
            // httpOnly: true,
            maxAge: maxAge * 1000,
        });
        console.log(validUser);
        res.status(200).json(validUser);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
export const logout = (req, res) => {
    res.send("Hello World");
};
export const signup_get = (req, res) => { };
export const login_get = async (req, res) => { };
