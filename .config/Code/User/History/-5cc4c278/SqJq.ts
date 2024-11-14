import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";

export const connectToDb = async () => {
  const connection = await createConnection({
    url: process.env.DATABASE_URL as string,
  });

  return drizzle(connection, { schema, mode: "default" });
};
