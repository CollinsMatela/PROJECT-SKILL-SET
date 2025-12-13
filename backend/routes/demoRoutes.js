import express from "express";
import { getDemo, createDemo } from "../controllers/demoController.js";

const router = express.Router();

// GET /api/demo
router.get("/", getDemo);

// POST /api/demo
router.post("/", createDemo);

export default router;
