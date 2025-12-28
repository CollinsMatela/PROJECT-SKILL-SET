import express from "express"
import { getPostingController } from "../controllers/getPostingController.js"

const router = express.Router();
router.get("/all-posting", getPostingController);

export default router;
