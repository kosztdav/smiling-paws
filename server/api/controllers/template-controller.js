import Template from '../models/template-model.js';

export const getTemplate = async (req, res) => {
	const { id } = req.params;
	try {
		const document = await Template.findOne({ id }).select('template -_id');

		if (document && document.template) {
			res.status(200).type('html').send(document.template);
		} else {
			res.status(404).send('Template not found.');
		}
	} catch (error) {
		console.error(error);
		res.status(500).send(error.stack);
	}
};

export const saveTemplate = async (req, res) => {
	const { id } = req.params;
	const { htmlContent } = req.body;

	if (!htmlContent) {
		return res.status(400).send('HTML content is required.');
	}

	try {
		// Update an existing template or create a new one if it doesn't exist
		const updatedDocument = await Template.findOneAndUpdate(
			{ id }, // find a document with this id
			{ template: htmlContent }, // update the template field
			{
				new: true, // return the updated document
				upsert: true, // create a new document if one doesn't exist
				runValidators: true, // run schema validators on update
				setDefaultsOnInsert: true // set default values defined in schema
			}
		);

		res.status(200).json({ message: 'Template saved successfully.', template: updatedDocument.template });
	} catch (error) {
		console.error(error);
		res.status(500).send(error.stack);
	}
};
