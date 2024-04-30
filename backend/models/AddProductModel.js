
const mongoose=require('mongoose');
require('dotenv').config();

const addProductSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },    
    desc:{
        type:String,
        required:true,
    },
    
    image:{
        type:String,
        default:'image_url_default'
        // required:true,
    },

    quantity:{
        type:Number,
        required:true
    }
   
   
});


const AddProduct=mongoose.model('AddProduct',addProductSchema);


module.exports=AddProduct;