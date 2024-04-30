const express=require('express');
const Register = require('../Models/productModel');

exports.loginController=async(req,res)=>{

     console.log("login data : ",req.body);

    try {
        const{email,password}=req.body;

        const user=await Register.findOne({email:email});
    
        if(!user){
            res.status(200).json({
                data:user,
                success:false,
                message:"Sorry,Invalid Credentail!!",
            })
        }
    
    
        res.status(200).json({
            data:user,
            success:true,
            message:"your loggedin successfully",
            // user,
        })
        
    } catch (error) {
        console.log(error)
        
    }
   

}


exports.registerController = async(req,res)=>{
    try {
        const regsiter = new Register({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            cpassword:req.body.cpassword

        })

        // const userData =  await Register.find({email:email})
        if(regsiter.password != regsiter.cpassword)
        {
            return res.status(422).json({status:422,message:"Password Doesnot Match"})
        }
        const userData = await regsiter.save()
        return res.status(200).json({status:200,message:"Register SuccesFul",data:userData})
    } catch (error) {
        res.status(500).json("Server Error")
        
    }
}

