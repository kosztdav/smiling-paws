import Training from '../models/training-model.js';

export const addUserToTraining = async (req, res) => {
	const { trainingId } = req.params;
	const { userId } = req.body;

	try {
		const training = await Training.findById(trainingId);
		if (!training) {
			return res.status(404).send('Training not found.');
		}

		if (training.attendees.includes(userId)) {
			return res.status(400).send('User is already attending this training.');
		}

		if (training.attendees.length >= training.size) {
			return res.status(400).send('Training is full.');
		}

		training.attendees.push(userId);
		await training.save();
		res.status(200).json({ message: 'User added to training.', training });
	} catch (error) {
		console.error('Error adding user to training:', error);
		res.status(500).send(error.stack);
	}
};

export const newTraining = async (req, res) => {
	const { name, description, date, size } = req.body;

	if (!name || !description || !date || !size) {
		return res.status(400).send('Missing required training details.');
	}

	try {
		const training = new Training({
			name,
			description,
			date: new Date(date),
			size,
			attendees: []
		});

		await training.save();
		res.status(201).json({ message: 'Training successfully created', training });
	} catch (error) {
		console.error('Error creating new training:', error);
		res.status(500).send(error.stack);
	}
};

export const getTrainings = async (req, res) => {
	try {
		const trainings = await Training.find();
		res.json(trainings);
	} catch (error) {
		console.error(error);
		res.status(500).send(error.stack);
	}
};
export const getTrainingWithAttendees = async (req, res) => {
	const { trainingId } = req.params;

	try {
		const training = await Training.findById(trainingId).populate('attendees');
		if (!training) {
			return res.status(404).send('Training not found.');
		}
		res.json(training);
	} catch (error) {
		console.error('Error fetching training:', error);
		res.status(500).send(error.stack);
	}
};
