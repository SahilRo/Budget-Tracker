const express = require('express');
const router = express.Router();
const billEntry = require('../models/billEntry'); 

router.get('/getbilldata', async (req, res) => {
  try {
    const entries = await billEntry.find(); 
    res.json(entries);
  } catch (err) {
    console.error('Error fetching entries:', err);
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
});

module.exports = router;
