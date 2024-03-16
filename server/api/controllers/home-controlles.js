import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAboutUsContent = async (req, res) => {
	try {
		res.sendFile(path.join(__dirname, '../__mock/about-us.html'));
	} catch (error) {
		res.status(500).send(error.stack);
	}
};

export const saveAboutUs = async (req, res) => {
	const { content } = req.body;

	// Validate that htmlContent is indeed a string
	console.log(req.body);
	if (typeof content !== 'string') {
		return res.status(400).send('Invalid HTML content.');
	}

	const filePath = path.join(__dirname, '../__mock/about-us.html');

	fs.writeFile(filePath, content, (err) => {
		if (err) {
			console.error('Failed to save HTML:', err);
			return res.status(500).send('Failed to save HTML.');
		}

		res.send('HTML content saved successfully.');
	});
};
