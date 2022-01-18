const mongoose = require("mongoose");
const schema = mongoose.Schema;
const postsSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    default: null,
  },
  short_desc: String,
  description: Array,
  author: {
    type: schema.Types.ObjectId,
    ref: "Author",
  },
  // tags: Array,
  // category: {
  //   type: schema.Types.ObjectId,
  //   ref: "categories",
  // },
  created_at: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("posts", postsSchema);
