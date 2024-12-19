import connectToDatabase from '../../lib/mongodb';
    import TestHotels from '../../models/TestHotels';

    export default async function handler(req, res) {
      try {
        await connectToDatabase();
        const hotels = await TestHotels.find({});
        res.status(200).json(hotels);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        res.status(500).json({ error: 'Failed to fetch hotels' });
      }
    }
