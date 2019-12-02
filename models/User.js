const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // birthday: {
    //     type: Date
    // },
    userName: {
        type: String,
        unique: true
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
});

UserSchema.virtual('fullname').get(function () {
    return this.firstName + ' ' + this.lastName;
});

module.exports = mongoose.model("User", UserSchema);