import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { products, images } from "./schema";


export const connection = await mysql.createConnection({
  uri: process.env.DATABASE_URL,
});

export const db = drizzle(connection, { schema:{products,images}});
