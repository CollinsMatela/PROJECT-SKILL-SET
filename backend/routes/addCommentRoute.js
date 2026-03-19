import express from 'express'
import addCommentController from '../controllers/addCommentController.js';
const router = express.Router();

router.post('/add-comment', addCommentController);

export default router;