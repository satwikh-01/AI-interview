 /** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://ai-interview-helper_owner:9Y6KaZXedhLI@ep-rough-credit-a1w8x505.ap-southeast-1.aws.neon.tech/ai-interview-helper?sslmode=require',
    }
  };