import express from "express";
import fetchBusinessRegistrationController from "../controllers/fetchBusinessRegistrationController.js";

const router = express.Router();
router.get("/fetch-seller-registration", fetchBusinessRegistrationController);

export default router;