const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"User"
    }
    // ,
    // address:{
    //     type:String,
    //     required:true
    // }
    // name: String,
    // email: String,
    // password:String,
    // address : String
})

const users = mongoose.model("users", userSchema);
module.exports = users;