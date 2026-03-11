import express from 'express';
import fetchAllUsersController from '../controllers/fetchAllUsersController.js';

const router = express.Router();
router.get('/map-fetch-all-users', fetchAllUsersController);

export default router;