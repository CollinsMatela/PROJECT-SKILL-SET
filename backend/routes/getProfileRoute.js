import express from "express";
import {getProfileController} from "../controllers/getProfileController.js"

       const router = express.Router();

       router.get("/:accountId", getProfileController);

export default router;