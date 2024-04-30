const express = require('express');
const connectDB = require('./db/config');
const router = require('./Routes/RegistrationRoute');
const productRouter=require('./Routes/ProductRoute');
const addProductRouter = require('./Routes/AddProductRoute');
const employeeRouter = require('./Routes/EmployeeRoute');
const cors = require('cors');
const app = express();
require('dotenv').config()
const cloudinary=require('cloudinary');
const expressUpload = require("express-fileupload")
app.use(expressUpload())

connectDB();

app.use(cors());
// app.get("/",(req,res)=>{
//     console.log("sdf")
//     res.send("App is working.....");
// })


//
cloudinary.config({
    
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

// routing concept
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',router);
app.use('/api',productRouter);
// app.use('/api',)
app.use('/api',addProductRouter)
app.use('/api',employeeRouter)


app.all("*", (req, res)=>{
    res.send("page not found")
})





 


app.listen(process.env.PORT,()=>{
    console.log(`server is running on port : ${process.env.PORT}`);
})


// // mongodb+srv://Rupesh:Rupeshrku@cluster1.mwn7nzx.mongodb.net/ewaste?retryWrites=true&w=majority