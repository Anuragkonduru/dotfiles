import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

async function migration() {
  const connection =
    postgres(
      process.env.POSTGRES_URL, { max: 1 }
    );
    
    await mysql.createConnection({
    uri: ,
  });

  const db = drizzle(connection, { schema, mode: "default" });

  await migrate(db, { migrationsFolder: "./drizzle/generated" });

  await connection.end();
}
migration();
