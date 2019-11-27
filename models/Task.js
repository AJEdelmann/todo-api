const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dueDate: {
        type: Number,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Task', TaskSchema);