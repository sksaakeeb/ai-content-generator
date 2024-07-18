/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://neondb_owner:rJqhG3n1MUHv@ep-hidden-thunder-a5cs4kjf.us-east-2.aws.neon.tech/neondb?sslmode=require",
    }
  };