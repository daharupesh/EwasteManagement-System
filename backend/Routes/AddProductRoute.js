const express=require('express');
const { AddproductDetails } = require('../controllers/AddProductController');
const router=express.Router();

const fileUpload  = require("../controllers/FileUpload")


router.route('/addProductDetails').post(AddproductDetails);
// router.post("/addProductDetails", fileUpload, AddproductDetails)
module.exports=router;
