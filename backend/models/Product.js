
const mongoose=require('mongoose');
require('dotenv').config();

const productSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    productName:{
        type: String,
        required:true
    },
    desc:{
        type:String,
        required:true,
    },
    quantity:{
        type: Number,
        required:true
    },
    image:{
        type:String,
        default:'image_url_default'
        // required:true,
    },
   
   
});


const Product=mongoose.model('Product',productSchema);


module.exports=Product;