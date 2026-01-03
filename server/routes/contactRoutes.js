import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST API - Store contact data
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: "Error saving contact", error });
  }
});

// GET API - Fetch all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ _id: -1 }); // Basic sorting (newest first)
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts" });
  }
});

export default router;
