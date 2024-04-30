
const mongoose=require('mongoose');
require('dotenv').config();

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    cpassword:{
        type:String,
        
    },
    role:{
        type:String,
        default:"Users"
    }
    // ,
    // address:{
    //     type:String,
    //     required: true
    // }
});


const Register=mongoose.model('regester',productSchema);


module.exports=Register;