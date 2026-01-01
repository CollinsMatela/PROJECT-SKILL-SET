import express from "express";
import { LikeController } from "../controllers/likeController.js";

const router = express.Router();

router.post("/posts/:postingId/like", LikeController)

export default router;