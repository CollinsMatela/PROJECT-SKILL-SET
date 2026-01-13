import express from "express";
import getSearchInputController from "../controllers/getSearchInputController.js";
const router = express.Router();

router.get("/search", getSearchInputController);

export default router;