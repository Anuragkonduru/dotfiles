import { sql } from "@vercel/postgres";
import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

async function migration() {
  const db = drizzle(sql);
  await migrate(db, { migrationsFolder: "drizzle" });

  await sql.end();
}
migration();
