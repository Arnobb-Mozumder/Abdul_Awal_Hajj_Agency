import mongoose from 'mongoose';

let isMongoConnected = false;

export async function connectDB(): Promise<boolean> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log('⚠️ [Database] MONGODB_URI is not set. Falling back to local file storage database in /database/ folder.');
    isMongoConnected = false;
    return false;
  }

  try {
    // Avoid re-connecting if already connected
    if (mongoose.connection.readyState >= 1) {
      isMongoConnected = true;
      return true;
    }

    await mongoose.connect(uri);
    console.log('✅ [Database] Connected to MongoDB database successfully.');
    isMongoConnected = true;
    return true;
  } catch (error) {
    console.error('❌ [Database] MongoDB connection failed:', error);
    isMongoConnected = false;
    return false;
  }
}

export function getIsMongoConnected(): boolean {
  // If mongoose is connected, return true
  if (mongoose.connection.readyState === 1) {
    isMongoConnected = true;
  } else {
    isMongoConnected = false;
  }
  return isMongoConnected;
}
