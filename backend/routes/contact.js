const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// POST /api/contact — Save a new inquiry
router.post('/', async (req, res) => {
  try {
    const { fullName, phone, email, disease, message } = req.body;

    if (!fullName || !phone || !email || !disease || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    const inquiry = new Inquiry({ fullName, phone, email, disease, message });
    await inquiry.save();

    res.status(201).json({ success: true, message: 'Your inquiry has been submitted successfully!' });
  } catch (error) {
    console.error('Contact route error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// GET /api/contact — Health check / list (dev only)
router.get('/', async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
