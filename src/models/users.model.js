const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uId: {
    type: String,
    unique: true,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Users", userSchema);