import express from 'express'
import fetchReviews from '../controllers/fetchReviews.js'

const router = express.Router();

router.get('/fetch-review/', fetchReviews);

export default router;