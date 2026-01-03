import express from "express"
import likesCountController from "../controllers/likesCountController.js"

const router = express.Router();

router.post("/likesCount", likesCountController);

export default router;