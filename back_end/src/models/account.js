const mongoose = require("mongoose");
const schema = mongoose.Schema;
const accountSchema = new schema({
  thumbnail: String,
  fullname: String,
  email: {
    type: String,
    unique: true,
  },
  passwordHash: String,

  password: String,
  token: String,
  role: {
    type: Number,
    default: 3,
  },
  created_time: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = mongoose.model("accounts", accountSchema);
