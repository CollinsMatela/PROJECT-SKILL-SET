import express from "express";
import { followController } from "../controllers/followController.js";

const router = express.Router();
router.post("/follow-user/:followerAccountId", followController)

export default router;