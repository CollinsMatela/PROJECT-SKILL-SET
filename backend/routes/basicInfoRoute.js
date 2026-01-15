import express from 'express';
import basicInfoController from '../controllers/basicInfoCntroller.js';

const router = express.Router();

router.post('/basic-info', basicInfoController);

export default router;