import { defineConfig } from "drizzle-kit";

export default  defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle/generated",
  driver:"mysql2",
  dbCredentials: {
    uri: process.env["DATABASE_URL"] as string,
  },
}) ;
