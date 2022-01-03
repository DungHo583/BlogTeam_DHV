const mongoose = require("mongoose");
const schema = mongoose.Schema;
const categoriesSchema = new schema({
  title: String,
  short_desc: String,
  description: String,
  name_author: String,
  tags: Array,
  type: Number,
  created_time: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("categories", categoriesSchema);
