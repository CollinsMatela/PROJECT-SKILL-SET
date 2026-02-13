import express from "express";
import RejectingBusinessRegistrationController from "../controllers/rejectingBusinessRegistrationController.js";

const router = express.Router();

router.post("/reject-business-registration", RejectingBusinessRegistrationController);

export default router;