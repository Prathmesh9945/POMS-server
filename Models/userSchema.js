const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    Contact: {
        type: String,
    },

    address: {
        type: String
    },

    email:
    {
        type: String,
        unique: true,
        required: true
    },

    username:
    {
        type: String,
        unique: true,
        required: true
    },

    password:
    {
        type: String,
        required: true
    },
    role:
    {
        type: String,
        enum: ['Admin', 'user'],
        default: 'user',
        required: true,
    },
    createdBy: {
        type: String,
        default:'devs'
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    IsVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
module.exports = { User }
