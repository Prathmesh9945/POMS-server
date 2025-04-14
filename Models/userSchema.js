const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    Contact:{
        type:String,
    },

    address:{
        type:String
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
        unique:true,
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
<<<<<<< HEAD:Models/userSchema.js
        enum: ['Admin', 'User'],
        default:'user'
=======
        enum: ['Admin', 'user'],
        default: 'user',
        required: true,
>>>>>>> fb07b6e856c46b0502b6b8f0f24b5dff8528820e:Models/userScema.js

    },
}, { timestamps: true }
);
<<<<<<< HEAD:Models/userSchema.js
const User = mongoose.model('User', userSchema);
module.exports = {User};
=======

const User = mongoose.model('User', UserSchema);
module.exports = { User }
>>>>>>> fb07b6e856c46b0502b6b8f0f24b5dff8528820e:Models/userScema.js
