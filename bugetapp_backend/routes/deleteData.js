const express = require('express');
const router = express.Router();
const Entry = require('../models/entry');
const Billentry = require('../models/billEntry.js');

router.delete('/del', async (req, res) => {
  try {
    const { item, bill } = req.body;
    if (item) {
      await Entry.findOneAndDelete({ item });
      res.status(200).json({ message: 'Entry deleted successfully' });
    } else if (bill) {
      await Billentry.findOneAndDelete({ bill });
      res.status(200).json({ message: 'Bill entry deleted successfully' });
    } else {
      res.status(400).json({ error: 'Item or bill field is required' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
