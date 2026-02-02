import { app } from "./app.js";
import { envConfiguration } from "./config/env.js";
import {checkDbConnection} from "./db/pool.js"

async function startServer() {
  try {
    await checkDbConnection();
    console.log("✅ Database connection verified");
     app.listen(envConfiguration.port, () => {
      console.log(`🚀 Server running on port ${envConfiguration.port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to database", err);
    process.exit(1);
  }
}

startServer();