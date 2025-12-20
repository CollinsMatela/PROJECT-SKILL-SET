import express from "express";
import { editProfileController } from "../controllers/editProfileController.js";

const router = express.Router();

router.post("/Profile/Edit-Profile", editProfileController);

export default router;