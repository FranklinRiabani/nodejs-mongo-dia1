const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
        minLength: 3,
        },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    }
    });

module.exports = mongoose.model('User', userSchema);