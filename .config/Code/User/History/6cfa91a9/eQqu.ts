import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { connection, db } from "./db";

function migrate() {
    
    await migrate(db, { migrationsFolder: "./drizzle/generated" });
    
    await connection.end();
}
