import express from "express";
import fetchCommentsController from "../controllers/fetchCommentsController.js";

const router = express.Router();
router.get("/get-comment", fetchCommentsController);

export default router;