import express from 'express';
import { getAboutUsContent, saveAboutUs } from '../controllers/home-controlles.js';

const router = express.Router();

router.get('/about-us', getAboutUsContent);
router.post('/save-about-us', saveAboutUs);

export default router;
