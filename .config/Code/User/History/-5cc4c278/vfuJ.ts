import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

export const connectToDb = async () => {
  const connection = await createConnection({
    url: process.env.DATABASE_URL as string,
  });

  return drizzle(connection, {
    schema,
  });
};