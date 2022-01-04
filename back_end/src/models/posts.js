const mongoose = require("mongoose");
const schema = mongoose.Schema;
const postsSchema = new schema({
  title: String,
  short_desc: String,
  description: String,
  name_author: String,
  tags: Array,
  type: Number,
  created_at: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("posts", postsSchema);
