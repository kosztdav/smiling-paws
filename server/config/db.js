import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb+srv://davidkosztolanyi96:iAf4wNtTpuenGWDi@smilingpaws.ig51iou.mongodb.net/smilingpaws');
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};
