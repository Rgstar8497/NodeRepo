import mongoose from 'mongoose';

const connectDB = async (DB_URL) => {
    try {
        await mongoose.connect(DB_URL);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
    }
}
export default connectDB;