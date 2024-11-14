import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle/generated",
  dialect: "mysql",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
    },
    verbose: true,
  strict:true
});
