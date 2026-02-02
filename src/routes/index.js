import express from "express";
import organisationRouter from "./organisation.routes.js";
const router = express.Router()


// Health check api 
router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

//regsiter routes here
router.use("/organisations",organisationRouter)


export default router;

