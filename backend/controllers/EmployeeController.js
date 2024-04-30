const express=require('express');
const Employee = require('../models/EmployeeModel');

exports.employeeDetails=async(req,res)=>{
    

    console.log(req.body);
    const{fullname,email,address,phone}=req.body;


    // const mycloud=await cloudinary.v2.uploader.upload(req.body.image,{
    //     folder:'product',
    // })

    // console.log(mycloud);


    const employee= await Employee.create(req.body);

   if(!employee){
    res.status(422).json({
        message:'Employee cannot added sorry!!!',
        employee,
    });
   }

   res.status(200).json({
    message:'Employee added successfully!!!',
    employee,
});

console.log(employee);

   

    //Product

   // res.status(200).json(req.body);
   

}
