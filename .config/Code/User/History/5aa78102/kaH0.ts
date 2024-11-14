import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema.js";

async function initializeConnection() {
  return await mysql.createConnection({
    uri: process.env.DATABASE_URL,
  });
}

export const connect = initializeConnection();

export const db = connect.then((connection) =>
  drizzle(connection, {
    schema,
    mode: "default",
    logger: true,
  })
);
