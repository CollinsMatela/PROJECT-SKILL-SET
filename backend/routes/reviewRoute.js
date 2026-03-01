import express from 'express';
import submitReview from '../controllers/submitReview.js';

const router = express.Router();

router.post('/submit-review', submitReview);

export default router;