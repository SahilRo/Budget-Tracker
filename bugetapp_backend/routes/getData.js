const express = require('express');
const router = express.Router();
const Entry = require('../models/entry'); 

router.get('/getdata', async (req, res) => {
  try {
    const entries = await Entry.find(); 
    res.json(entries);
  } catch (err) {
    console.error('Error fetching entries:', err);
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
});

module.exports = router;
