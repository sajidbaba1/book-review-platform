const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  genre: { type: String },
  featured: { type: Boolean, default: false },
  ratings: { type: Number, default: 0 },
});

module.exports = mongoose.model('Book', bookSchema);
