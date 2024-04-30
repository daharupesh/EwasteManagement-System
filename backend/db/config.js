const mongoose=require('mongoose');
require('dotenv').config();


const connectDB=async()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log('connected database');
    }).catch((error)=>{
        console.log("Error : ",error)
    })

    
}

module.exports = connectDB;

