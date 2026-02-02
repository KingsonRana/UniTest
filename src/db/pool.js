//import entire package as {pool} this destructuring might not work with non es library because they do not support default export and if 'pool' name is not there then will get error
import pkg from "pg";
import { envConfiguration } from "../config/env.js";

const {Pool} = pkg

//configure the pool 
export const pool = new Pool({
  host: envConfiguration.db.host,
  port: envConfiguration.db.port,
  database: envConfiguration.db.name,
  user: envConfiguration.db.user,
  password: envConfiguration.db.password,
  max: 10,                 // connection pool size
  idleTimeoutMillis: 30000, // how long before the idle connection should be closed
  connectionTimeoutMillis: 2000, //how long to wait for db connection
});

pool.on("connect", () => {
  console.log("Connected to PostgreSQL");
});

pool.on("error", (err) => {
  console.error("PostgreSQL pool error", err);
  process.exit(1);
});


//DB Health check function
export async function checkDbConnection() {
  const result = await pool.query("SELECT 1");
  return result.rowCount === 1;
}
