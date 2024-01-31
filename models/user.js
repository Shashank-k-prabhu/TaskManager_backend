const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  phone_number: { type: String, required: true },
  priority: { type: Number, required: true },
});
const User = mongoose.model("User", userSchema);

module.exports = User;

