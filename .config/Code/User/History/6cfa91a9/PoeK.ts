import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

async function migration() {
  const connection = await mysql.createConnection({
    uri: process.env.POSTGRES_URL,
  });

  const db = drizzle(connection, { schema, mode: "default" });

  await migrate(db, { migrationsFolder: "./drizzle/generated" });

  await connection.end();
}
migration();
