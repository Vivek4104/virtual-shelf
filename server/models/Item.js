const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  person: String,
  type: { type: String, enum: ["Lent", "Borrowed"] },
  status: { type: String, enum: ["Pending", "Returned"], default: "Pending" },
  dateGiven: Date,
  expectedReturn: Date,
});

module.exports = mongoose.model('Item', ItemSchema);
