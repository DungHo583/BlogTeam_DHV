const mongoose = require("mongoose");
const schema = mongoose.Schema;
const authorSchema = new schema({
  description: String,
  name_author: String,
  email_address: String,
  created_time: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("author", authorSchema);
