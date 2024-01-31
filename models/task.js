const mongoose = require("mongoose");
const { Schema } = mongoose;
const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  due_date: { type: Date, required: true },
  priority: { type: Number, required: true },
  status: { type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
