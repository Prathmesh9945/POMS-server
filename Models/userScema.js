const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username:
    {
        type: String,
        trim: true,
        required: true
    },
    email:
    {
        type: String,
        unique: true,
        trim: true,
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
        enum: ['Admin', 'User'],
        required: true,

    }
},
);

module.exports = mongoose.model('User', UserSchema);
