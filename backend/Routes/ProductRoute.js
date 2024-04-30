const express=require('express');
const { productDetails, getProductDetails, deleteProduct } = require('../controllers/productController');
const router=express.Router();





router.route('/product/collection').post(productDetails);
// router.route('/product/deleteProd/:id')

router.route('/productDetails').get(getProductDetails);
router.route('/productDetails/:id').delete(deleteProduct);

module.exports=router;