import express from "express"
import { getUsersController } from "../controllers/getUsersController.js"

const router = express.Router();
router.get("/fetchUsers", getUsersController);

export default router;