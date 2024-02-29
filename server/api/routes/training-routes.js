import express from 'express';
import { addUserToTraining, getTrainingWithAttendees, newTraining, getTrainings } from '../controllers/training-controller.js';

const router = express.Router();

router.get('/trainings', getTrainings);
router.post('/trainings', newTraining);
router.post('/trainings/:trainingId/attendees', addUserToTraining);
router.get('/trainings/:trainingId', getTrainingWithAttendees);

export default router;
