const express = require("express");
const AddProduct = require("../models/AddProductModel");

// const cloudinary=require('cloudinary');

exports.AddproductDetails = async (req, res) => {
  const {productName,catagory,desc,image,quantity} = req.body;


  const addProduct= await AddProduct.create(req.body);
  if(!addProduct){
    res.status(422).json({
        message:'product details cannot submit !',
        addProduct,
    });
   }

   res.status(200).json({
    message:'product details submitted successfully!',
    addProduct,
});

console.log(addProduct);

  // const newProduct = new AddProduct({
  //   productName,
  //   catagory,
  //   desc,
  //   quantity,
  //   image: req.filename,
  // });
  // await newProduct.save();
  // res.status(200).json("data inserted success");
};

// exports.deleteProduct = async(req,res)=>{
//     try {
//         const id= req.params.id
//         console.log('id: ',id)
//         const deleteProduct = await Product.findByIdAndDelete({_id:id})
//         res.status(200).json({status:200,data:deleteProduct,message:"Product Deleted"})
//     } catch (error) {
//         res.status(500).json("server error")

//     }
// }

//to get product details data
// exports.getProductDetails=async(req,res)=>{
//     const product=await Product.find();

//     if(!product){
//        res.status(400).json({
//         message:"Something went worng!!",
//        })
//     }
//     res.status(200).json({
//         message:"get successfully product details",
//         product,
//        })
// }
