// Imports
import mongoose from "mongoose";

// Schema Definition
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String },
});

// Model Creation
const Contact = mongoose.model("Contact", contactSchema);

// Export
export default Contact;
