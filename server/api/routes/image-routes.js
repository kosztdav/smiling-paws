import express from 'express';
import { getImageForModule } from '../controllers/image-controller.js';

const router = express.Router();

router.get('/images/:id', getImageForModule);

export default router;
