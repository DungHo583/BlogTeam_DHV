const mongoose = require("mongoose");
const schema = mongoose.Schema;
const authorSchema = new schema({
  description: String,
  name_author: String,
  email_address: String,
  image: String,
  created_at: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("author", authorSchema);
