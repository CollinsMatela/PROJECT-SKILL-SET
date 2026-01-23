import express from "express";
import { whoFollowController } from "../controllers/whoFollowController.js";

const router = express.Router();
router.post("/who-followed", whoFollowController);

export default router;