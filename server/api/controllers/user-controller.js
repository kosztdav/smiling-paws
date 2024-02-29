import User from '../models/user-model.js';

export const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		console.error(error);
		res.status(500).send(error.stack);
	}
};

export const createUser = async (req, res) => {
	try {
		const { name, email } = req.body;

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'A user with this email already exists.' });
		}

		const user = await User.create({ name, email });
		res.status(201).json({ message: 'User successfully created.', user });
	} catch (error) {
		console.error(error);
		res.status(500).send(error.stack);
	}
};

export const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, email } = req.body;
		const user = await User.findByIdAndUpdate(id, { name, email }, { new: true });

		if (!user) {
			return res.status(404).send('User not found.');
		}

		res.status(200).json({ message: 'User successfully updated.', user });
	} catch (error) {
		console.error(error);
		res.status(500).send(error.stack);
	}
};

export const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndDelete(id);

		if (!user) {
			return res.status(404).send('User not found.');
		}

		res.status(200).json({ message: 'User successfully deleted.', user });
	} catch (error) {
		console.error(error);
		res.status(500).send(error.stack);
	}
};
