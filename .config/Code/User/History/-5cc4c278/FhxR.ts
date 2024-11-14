import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

export const connection = await mysql.createConnection({
  uri: process.env.DATABASE_URL,
});

export const db = drizzle(connection, {
  schema,
  mode: "default",
  logger: true,
});


import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

// Create a separate async function to initialize the connection
async function initializeConnection() {
  return await mysql.createConnection({
    uri: process.env.DATABASE_URL,
  });
}

export const connectionPromise = initializeConnection();


export const db = connectionPromise.then((connection) =>
  drizzle(connection, {
    schema,
    mode: "default",
    logger: true,
  })
);

