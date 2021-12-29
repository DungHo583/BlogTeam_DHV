const mongoose = require("mongoose");
const schema = mongoose.Schema;
const accountSchema = new schema({
  fullname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  token: String,
  role: {
    type: Number,
    default: 3,
  },
  created_time: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("accounts", accountSchema);
