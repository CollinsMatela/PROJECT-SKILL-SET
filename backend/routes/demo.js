
import express from "express";
import demo from "../controllers/demo.js";

const router = express.Router();

router.get("/",demo);

export default router;