import express from 'express';
import { getTemplate, saveTemplate } from '../controllers/template-controller.js';

const router = express.Router();

router.get('/templates/:id', getTemplate);
router.post('/templates/:id', saveTemplate);

export default router;
