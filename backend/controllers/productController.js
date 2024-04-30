const express=require('express');
const Product = require('../models/Product');

const cloudinary=require('cloudinary');


exports.productDetails=async(req,res)=>{
    

    console.log(req.body);

    const{fullname,email,phone,address,productName,desc,quantity,image}=req.body;


    // const mycloud=await cloudinary.v2.uploader.upload(req.body.image,{
    //     folder:'product',
    // })

    // console.log(mycloud);


    const product= await Product.create(req.body);

   if(!product){
    res.status(422).json({
        message:'product details cannot submit !',
        product,
    });
   }

   res.status(200).json({
    message:'product details submitted successfully!',
    product,
});

console.log(product);

   

    //Product

   // res.status(200).json(req.body);
   

}

exports.deleteProduct = async(req,res)=>{
    try {
        const id= req.params.id
        console.log('id: ',id)
        const deleteProduct = await Product.findByIdAndDelete({_id:id})
        res.status(200).json({status:200,data:deleteProduct,message:"Product Deleted"})
    } catch (error) {
        res.status(500).json("server error")
        
    }
}



//to get product details data
exports.getProductDetails=async(req,res)=>{
    const product=await Product.find();

    if(!product){
       res.status(400).json({
        message:"Something went worng!!",
       })
    }
    res.status(200).json({
        message:"get successfully product details",
        product,
       })
}