const mongoose = require("mongoose");
const { Schema } = mongoose;
const subTaskSchema = new Schema(
 {
  task_id: mongoose.Types.ObjectId,
  status: Number,
});

const SubTask = mongoose.model("SubTask",subTaskSchema);
module.exports = SubTask;
