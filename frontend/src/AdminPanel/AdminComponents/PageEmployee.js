import React, { useState } from 'react'
import EmployeePageTable from './EmployeePageTable'
export default function PageEmployee() {
  const [emName,setEmName] = useState("");
  const [emEmail,setEmEmail]=useState("");
  const [emAddress,setEmAddress]=useState("");
  const [emPhone,setEmPhone] = useState();
  const AddEmployeeHandler =async(e)=>{
     e.preventDefault(e);
    console.log("data : ",emName,emEmail,emAddress,emPhone);
   let result = await fetch('http://localhost:8003/api/EmployeeDetails',{
    method : 'post',
    body : JSON.stringify({emName,emEmail,emAddress,emPhone}),
    headers :{
      'Content-Type' : 'application/json'
      // 127.0.0.1
    },
  });
  result = await result.json();
  if(!result){
    alert("Employee doesnot added!!")

  }
  alert("Employee Added successfully!!")
  // console.log(result);
  // if(result.status===421){
      
  //   alert(result.message)
  // }else if(result.status ===201) {
  //         alert(result.message)
  // }

    


  }

  
  return (
    
    <div className='container-fluid'>
      <div className='row pt-4'>
        <div className='col-10 offset-1 '>
        <form className='card p-5 w-100' style={{"width":"100%"}}>
          <h1 className='text-center text-success'>Add Employee Details</h1>
  
  
            <div className="mt-4 mb-1 ">
                <div className="form" style={{"width":"100%"}}>
                    <input type="text" id="form6Example1" className="form-control" style={{"width":"100%"}} value={emName} onChange={(e)=>setEmName(e.target.value)}/>
                    <label className="form-label" for="form6Example1">Employee Name</label>
                </div>
            
            </div>

   {/* <!-- Email input --> */}
   <div className="mb-1">
    <input type="email" id="form6Example5" className="form-control" value={emEmail} onChange={(e)=>setEmEmail(e.target.value)}/>
    <label className="form-label" for="form6Example5">Email Address</label>
   </div>

  {/* <!-- Text input --> */}
  
  
  <div class="mb-1">
    <input type="tel" id="typePhone" class="form-control" value={emAddress} onChange={(e)=>setEmAddress(e.target.value)}/>
    <label class="form-label" for="typePhone">Emplyee Address</label>
 </div>
      {/* <div className='mb-1'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.81619358873!2d70.75125586958322!3d22.273471934512738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1680774901226!5m2!1sen!2sin"
           title='this is iframe'   style={{"width":"200", "height":"500"}} alt=""/>
      </div> */}

  {/* <!-- Text input --> */}
  {/* <div className="mb-1">
    <input type="text" id="form6Example4" className="form-control"  />
    <label className="form-label" for="form6Example4">Complete Address or Location</label>
  </div> */}

  {/* <div className="mb-1">
    <input type="text" id="form6Example4" className="form-control" 
    />
    <label className="form-label" for="form6Example4">Complete name of Product</label>
  </div> */}
  {/* product description */}
  <div className="mb-1">
    <input type="text" id="form6Example4" className="form-control" value={emPhone} onChange={(e)=>setEmPhone(e.target.value)} />
    <label className="form-label" for="form6Example4">Employee Phn.</label>
  </div>
  {/* <div className=' mb-1'>
    <input className="form-control form-control-sm" id="formFileSm" type="file"   />
    <label for="formFileSm" className="form-label">Select img of product</label>
  </div>
  */}
  {/* <div className='mt-1'>
    <input type="number" id="typeNumber" class="form-control" />
    <label class="form-label" for="typeNumber">Employee Email</label>
   </div>  */}
 
  {/* <!-- Message input --> */}
  
  
  {/* <!-- Submit button --> */}
  <button type="submit" onClick={AddEmployeeHandler} className="btn btn-s btn-success mb-4">Add Employee</button>
</form>

        </div>
        <div col-10 offset-6  mt-5>
        <EmployeePageTable/>
        </div>
       
      </div>
      
      </div>

 

    
  )
}
