const mongoose = require("mongoose");
const schema = mongoose.Schema;
const commentSchema = new schema({
    description: String,
    name_account: String,
    email_address: String,
    thumbnail: String,
    created_at: {
      type: Number,
      default: Date.now(),
    },
});
module.exports = mongoose.model("comment", commentSchema);