import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getImageForModule = (req, res) => {
	const { id } = req.params;
	const folderPath = path.join(__dirname, `../../../public/assets/${id}`);

	fs.readdir(folderPath, (err, files) => {
		if (err) {
			console.error('Error reading the directory:', err);
			return res.status(500).send('Error reading the directory.');
		}

		const images = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
		if (images.length === 0) {
			return res.status(404).send('No images found in the specified folder.');
		}

		const randomIndex = Math.floor(Math.random() * images.length);
		const selectedImage = images[randomIndex];
		const imagePath = path.join(folderPath, selectedImage);

		res.sendFile(imagePath);
	});
};
