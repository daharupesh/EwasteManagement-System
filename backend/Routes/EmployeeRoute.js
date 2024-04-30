const express=require('express');
const { employeeDetails } = require('../controllers/EmployeeController');

const router=express.Router();

router.route('/employeeDetails').post(employeeDetails);
module.exports=router;