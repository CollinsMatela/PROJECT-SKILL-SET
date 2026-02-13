import express from "express";
import ApprovingBusinessRegistrationController from "../controllers/approvingBusinessRegistrationController.js";

const router = express.Router();
router.post("/approve-business-registration", ApprovingBusinessRegistrationController);

export default router;