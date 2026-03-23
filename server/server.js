import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Connect to MongoDB database
connectDB();

// Middlewares
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use(morgan("dev")); // Log HTTP requests in the console

// Routes
app.get("/", (req, res) => {
  // Test route to check if API is working
  res.send("API Running...");
});

// Define server port (use .env PORT or default 5000)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});