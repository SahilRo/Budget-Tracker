const mongoose = require('mongoose');
const billSchema = new mongoose.Schema({
    bill: { type: String, required: true },
  });
  const Billentry = mongoose.model('Billentry', billSchema);

  module.exports = Billentry;

