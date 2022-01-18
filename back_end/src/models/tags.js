const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tagSchemma = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  created_at: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model('tags', tagSchemma);
