import express from "express";
import {getProfileController} from "../controllers/getProfileController.js"

const router = express.Router();
router.get("/view-profile/:accountId", getProfileController);

export default router;