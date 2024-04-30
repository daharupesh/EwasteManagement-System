import React, { useState } from 'react'
export default function AddProductForm() {
  const [productName,setProductName] = useState("");
  const [catagory,setCatagory]=useState("");
  const [desc,setDesc]=useState("");
  const [image,setImage] = useState("");
  const [quantity,setQuanity] = useState();

  // productName: 'Laptop',
  // catagory: 'electronics',
  // desc: 'This is wasted product',
  // Image: 'this is image',
  // quantity: 45

 
    const addProductHandler =async(e)=>{
      e.preventDefault();

      console.log("data : ",productName,catagory,desc,quantity,image);
   let result = await fetch('http://localhost:8003/api/addProductDetails',{
    method : 'post',
    body : JSON.stringify({productName,catagory,desc,quantity}),
    headers :{
      'Content-Type' : 'application/json'
      // 127.0.0.1
    },
  });
  result = await result.json();
  if(!result){
    alert("product doesnot added!!")

  }
  alert("Product Added successfully!!")
  // console.log(result);
  // if(result.status===421){
      
  //   alert(result.message)
  // }else if(result.status ===201) {
  //         alert(result.message)
  // }

    }

//  const collectData=async()=>{

//   let result = await fetch('http://localhost:8003/api/register',{
//     method : 'post',
//     body : JSON.stringify({name,email,password,cpassword}),
//     headers :{
//       'Content-Type' : 'application/json'
//       // 127.0.0.1
//     },
    
//   });
//   result = await result.json();
//   console.log(result);
//   if(result.status===422){
    
//     alert(result.message)
//   }else if(result.status ===200) {
//           alert(result.message)
//           navigate('/login')
//   }
// }






  return (
    <div className='container-fluid'>
      <div className='row pt-4'>
        <div className='col-18 offset-4 '>
        <form className='card p-5 w-100' style={{"width":"100%"}}>
          <h1 className='text-center text-success'>Add E-Products</h1>
  
  
            <div className="mt-4 mb-1 ">
                <div className="form" style={{"width":"100%"}}>
                    <input type="text" id="form6Example1" className="form-control" style={{"width":"100%"}} value={productName} onChange={(e)=>setProductName(e.target.value)} />
                    <label className="form-label" for="form6Example1">Product Name</label>
                </div>
            
            </div>
  
  
  <div class="mb-1">
    <input type="tel" id="typePhone" class="form-control" value={catagory} onChange={(e)=>setCatagory(e.target.value)}/>
    <label class="form-label" for="typePhone">Product Category</label>
 </div>
    
  <div className="mb-1">
    <input type="text" id="form6Example4" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} />
    <label className="form-label" for="form6Example4">Description of Product</label>
  </div>
  <div className=' mb-1'>
    <input className="form-control form-control-sm" id="formFileSm" type="file"  value={image} onChange={(e)=>setImage(e.target.value)} />
    <label for="formFileSm" className="form-label">Select img of product</label>
  </div>
 
  <div className='mt-1'>
    <input type="number" id="typeNumber" class="form-control" value={quantity} onChange={(e)=>setQuanity(e.target.value)}/>
    <label class="form-label" for="typeNumber">Quantity of Product</label>
   </div> 
  {/* <!-- Message input --> */}
  
  
  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-s btn-success mb-4" onClick={addProductHandler}>Add Prodcut</button>
</form>
        </div>
      </div>
      </div>
     
    
  )
}
