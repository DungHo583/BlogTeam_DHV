const mongoose = require("mongoose");
const schema = mongoose.Schema;
const typeCateSchema = new schema({
  title: String,
  description: String,
  created_time: Date,
});

module.exports = mongoose.model("typeCategories", typeCateSchema);
