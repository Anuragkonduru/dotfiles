import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { sql } from "@vercel/postgres";

async function migration() {
  const sql = sql(process.env.POSTGRES_URL, { max: 1 });
  const db = drizzle(sql);
  await migrate(db, { migrationsFolder: "drizzle" });

  await sql.end();
}
migration();
