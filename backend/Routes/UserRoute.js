const express = require('express')
const {users} = require('../models/users')

const router = express.Router();
router.route('/register').post(async(req,res)=>{
        console.log(req.body);
        res.send(req.body)
    // let users = new users(req.body);
    // let result =await users.save();
    // res.send(result);


});

module.exports = router;

// app.post('/register',(req,res)=>{
//     res.send(req.body)
// })