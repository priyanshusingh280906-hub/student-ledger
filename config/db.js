const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbUri = process.env.MONGO_URI || process.env.MONGO_URL;
    if (!dbUri) {
      console.error("Error: MONGO_URI or MONGO_URL is not defined in environment variables.");
      process.exit(1);
    }
    await mongoose.connect(dbUri);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;