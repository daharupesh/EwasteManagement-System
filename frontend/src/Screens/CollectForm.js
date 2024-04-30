import React, { useState } from 'react';


export default function CollectForm() {


    const[fullname,setFullName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState();
    const[address,setAddress]=useState('');
    const[productName,setProductName]=useState('');
    const[desc,setDesc]=useState('');
    const[image,setImage]=useState();
    const[quantity,setQuantity]=useState();

    // const checkValidation=()=>{
    //   if(!fullname){
    //     alert('sorry this field cannot be empty');
    //   }
    // }


    const submitHandler=async(e)=>{
      
      //checkValidation();

      e.preventDefault();


//make object of form data then pass in multiform-data

      console.log("data : ",email,phone,address,productName,desc,quantity,image);

      let result = await fetch('http://localhost:8003/api/product/collection',{
        method : 'post',
        body : JSON.stringify({fullname,email,phone,address,productName,desc,quantity,image}),
        headers :{
          'Content-Type' : 'application/json'
        },
        
      });
      result = await result.json();
      console.log('result:  ',result);
      if(result){
        alert(result.message)
      }else {
            alert(result.message)
              
      }


    }


  return (
    <div style={{"background-image":"url('https://redlevelgroup.com/wp-content/uploads/2019/04/hands20the20young20sprout20and20our20planet20Earth.jpg"}}>
      <div className='row pt-4'>
        <div className='col-md-8 offset-2'>
        <form className='card p-5 w-100' >
          <h1 className='text-center'>Collection of Product Details</h1>
  
  
  <div className="row ">
    <div className="col">
      <div className="form">
        <input type="text" id="form6Example1" className="form-control"  value={fullname} onChange={(e)=>setFullName(e.target.value)} />
        <label className="form-label" for="form6Example1">Full name</label>
      </div>
    </div>
  </div>

   {/* <!-- Email input --> */}
   <div className="mb-1">
    <input type="email" id="form6Example5" className="form-control"  value={email} onChange={(e)=>setEmail(e.target.value)} />
    <label className="form-label" for="form6Example5">Email Address</label>
   </div>

  {/* <!-- Text input --> */}
  
  
  <div class="mb-1">
    <input type="tel" id="typePhone" class="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} />
    <label class="form-label" for="typePhone">Phone number</label>
 </div>
      {/* <div className='mb-1'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.81619358873!2d70.75125586958322!3d22.273471934512738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1680774901226!5m2!1sen!2sin"
           title='this is iframe'   style={{"width":"200", "height":"500"}} alt=""/>
      </div> */}

  {/* <!-- Text input --> */}
  <div className="mb-1">
    <input type="text" id="form6Example4" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)} />
    <label className="form-label" for="form6Example4">Complete Address or Location</label>
  </div>

  <div className="mb-1">
    <input type="text" id="form6Example4" className="form-control"  value={productName} onChange={(e)=>setProductName(e.target.value)}/>
    <label className="form-label" for="form6Example4">Complete name of Product</label>
  </div>
  {/* product description */}
  <div className="mb-1">
    <input type="text" id="form6Example4" className="form-control"  value={desc} onChange={(e)=>setDesc(e.target.value)}/>
    <label className="form-label" for="form6Example4">Description of Product</label>
  </div>
  <div className=' mb-1'>
    <input className="form-control form-control-sm" id="formFileSm" type="file"  value={image} accept='image/*'  onChange={(e)=>setImage(e.target.value)} />
    <label for="formFileSm" className="form-label">Select img of product</label>
  </div>
 
  <div className='mt-1'>
    <input type="number" id="typeNumber" class="form-control" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
    <label class="form-label" for="typeNumber">Quantity of Product in Kg</label>
   </div> 
  {/* <!-- Message input --> */}
  
  
  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-secondary btn-block mb-4" onClick={submitHandler} >Send Details</button>
</form>
        </div>
      </div>
     
    </div>
  )
}
