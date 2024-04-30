
const mongoose=require('mongoose');
require('dotenv').config();

const employeeSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   
    address:{
        type:String,
        required:true,
    },
    phone:{
        type: Number,
        // required:true
    }
    
   
});


const Employee=mongoose.model('Employee',employeeSchema);


module.exports=Employee;