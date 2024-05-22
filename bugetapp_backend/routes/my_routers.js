const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');
router.post('/list', async (req, res) => {
  try {
    const { item, cost } = req.body;
    const newEntry = new Entry({ item, cost });
    await newEntry.save();
    res.status(201).json({ message: 'Entry saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;

