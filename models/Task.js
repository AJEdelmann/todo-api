const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const TaskSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        default: new Date()
    },
    progress: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Task', TaskSchema);