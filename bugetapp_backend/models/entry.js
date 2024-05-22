const mongoose = require('mongoose');
const entrySchema = new mongoose.Schema({
    item: { type: String, required: true },
    cost: { type: Number, required: true }
  });
  const Entry = mongoose.model('Entry', entrySchema);

  module.exports = Entry;