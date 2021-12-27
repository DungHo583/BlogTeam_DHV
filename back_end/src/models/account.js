const mongoose = require("mongoose");
const schema = mongoose.Schema;
const accountSchema = new schema({
  fullname: String,
  email: String,
  password: String,
  role: Number,
  created_time: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("accounts", accountSchema);
