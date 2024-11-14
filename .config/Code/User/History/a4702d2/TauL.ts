import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle/generated",
  driver:"",
  dbCredentials: {
    uri: process.env["DATABASE_URL"] as string,
  },
} satisfies Config;
