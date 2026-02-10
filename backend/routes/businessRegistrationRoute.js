import express from "express";
import BusinessRegistrationController from "../controllers/businessRegistrationController.js";

const router = express.Router();
router.post("/business-registration", BusinessRegistrationController);

export default router;