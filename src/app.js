import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/index.js";
export const app = express();

// Security headers
app.use(helmet());

// JSON parsing
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

// Disable caching for API responses
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  res.set('Pragma', 'no-cache')
  res.set('Expires', '0')
  next()
})

// Simple request logger
app.use((req, res, next) => {
  console.log("📥 Incoming request:", req.method, req.url);
  next();
});

app.get("/health",(req, res) => {
  res.json({ status: "ok" });
})

app.use("/api",router)
