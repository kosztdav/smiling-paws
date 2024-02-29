import mongoose from 'mongoose';

const trainingSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		date: {
			type: Date,
			required: true
		},
		size: {
			type: Number,
			required: true
		},
		attendees: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		]
	},
	{
		timestamps: true
	}
);

const Training = mongoose.model('Training', trainingSchema);

export default Training;
