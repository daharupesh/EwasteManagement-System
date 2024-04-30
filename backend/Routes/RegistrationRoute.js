const express=require('express');
// const { addProduct, getProduct } = require('../Controllers/addProduct');


const { loginController, registerController } = require('../controllers/loginController');

const router=express.Router();

router.route('/register').post(registerController);
router.route('/login').post(loginController);

// router.route('/product').get(getProduct);

// router.route('/product').get((req,res)=>{
//     res.send("from route files data ");
// })


module.exports=router;