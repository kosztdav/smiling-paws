import mongoose from 'mongoose';

const templateSchema = mongoose.Schema(
	{
		id: { type: String, required: true, unique: true },
		template: { type: String, required: false }
	},
	{
		timestamps: true
	}
);

const Template = mongoose.model('Template', templateSchema);

export default Template;
