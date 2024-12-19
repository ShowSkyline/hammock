import mongoose from 'mongoose';

    const AmenitySchema = new mongoose.Schema(
      {
        name: { type: String },
        value: { type: Boolean },
      },
      { _id: false }
    );

    const HotelSchema = new mongoose.Schema({
      "Hotel Name": { type: String },
      Stars: { type: String },
      "Image URL": { type: String },
      "Nightly Rate": { type: String },
      SellingPrice: { type: String },
      expediaPrice: { type: String },
      "Average Nightly Rate with Markup": { type: String },
      "Free Cancellation Until": { type: String },
      "Boarding Type": { type: String },
      Distance: { type: String },
      Address: { type: String },
      Amenities: {
        parking: { type: Boolean, default: false },
        airConditioned: { type: Boolean, default: false },
        spa: { type: Boolean, default: false },
        restaurant: { type: Boolean, default: false },
        gym: { type: Boolean, default: false },
        reception24Hour: { type: Boolean, default: false },
        internet: { type: Boolean, default: false },
        swimmingPool: { type: Boolean, default: false }
      },
      "Room Type": { type: String },
      "Made By": { type: String },
      Timestamp: {
        type: String,
        default: new Date().toISOString(),
      },
      savings: { type: String },
    });

    const TestHotelsSchema = new mongoose.Schema({
      showName: { type: String },
      isExpired: { type: Boolean, default: true },
      Hotels: [HotelSchema],
      lastModified: { type: Date, default: Date.now },
    });

    TestHotelsSchema.pre("save", function (next) {
      this.lastModified = Date.now();
      next();
    });

    const TestHotels = mongoose.models.TestHotels || mongoose.model("TestHotels", TestHotelsSchema);

    export default TestHotels;
