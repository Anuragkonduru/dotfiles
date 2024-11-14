import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

async function migration() {
  const migrationClient =
    postgres(
      process.env.POSTGRES_URL, { max: 1 }
    );


 migrate(migrationClient, { migrationsFolder: "./drizzle/generated" });

  await connection.end();
}
migration();
