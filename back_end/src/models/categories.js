const mongoose = require("mongoose");
const schema = mongoose.Schema;
const categoriesSchema = new schema({
  title: String,
  short_desc: String,
  description: String,
  created_at: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("categories", categoriesSchema);
