const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Task", TaskSchema);
