import express from "express";
import { postingController } from "../controllers/postingController.js";

const router = express.Router();

router.post("/posting", postingController);

export default router;