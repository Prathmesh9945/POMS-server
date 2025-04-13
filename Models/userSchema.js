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
        enum: ['Admin', 'User'],
        default:'user'

    }
},
);
const User = mongoose.model('User', userSchema);
module.exports = {User};
