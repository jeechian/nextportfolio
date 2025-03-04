import mongoose from "mongoose";

// Define the schema for ratings
const Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"] },
  comment: { type: String, required: false },
  liked: { type: Boolean, default: false }, // Store liked status
  date: { type: Date, default: Date.now },
});

// Check if the model already exists, and use it, or create a new one if not
const Rate = mongoose.models.Rate || mongoose.model("Rate", Schema);

// Export the Rate model
export default Rate;
