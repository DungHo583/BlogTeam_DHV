const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Tags = new Schema({
  title: { type: Array, },
  description: { type: String },
},
  {
    timestamps: true,
  });

module.exports = mongoose.model('Tags', Tags);
