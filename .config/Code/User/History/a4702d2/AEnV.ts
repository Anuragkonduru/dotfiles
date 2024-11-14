import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle/generated",
  dialect: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
});
