import mongoose from "mongoose";

// Function to connect to MongoDB database
export const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI stored in environment variables
    await mongoose.connect(process.env.MONGO_URI);

    // Log success message if connection is successful
    console.log("MongoDB Connected");
  } catch (error) {
    // Log error if connection fails
    console.error(error);

    // Exit the application with failure status
    process.exit(1);
  }
};