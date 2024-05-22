const express = require('express');
const router = express.Router();
const Billentry = require('../models/billEntry.js');
router.post('/billlist', async (req, res) => {
    try {
      const { bill } = req.body;
      if (!bill) {
        return res.status(400).json({ error: 'Bill field is required' });
      }
      const newEntry = new Billentry({ bill });
      await newEntry.save();
      res.status(201).json({ message: 'Entry saved successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  module.exports = router;  

