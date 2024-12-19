import mongoose from 'mongoose';

    const connectionString = 'mongodb+srv://skyliner:eU1hDeg1nOXw504S@atlascluster.nbkt9.mongodb.net/?retryWrites=true&w=majority';

    if (!connectionString) {
      throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    let cached = global.mongoose;

    if (!cached) {
      cached = global.mongoose = { conn: null, promise: null };
    }

    async function connectToDatabase() {
      if (cached.conn) {
        return cached.conn;
      }

      if (!cached.promise) {
        const opts = {
          bufferCommands: false,
        };

        cached.promise = mongoose.connect(connectionString, opts).then((mongoose) => {
          return mongoose;
        }).catch((error) => {
          console.error('MongoDB connection error:', error);
          throw error;
        });
      }
      cached.conn = await cached.promise;
      return cached.conn;
    }

    export default connectToDatabase;
