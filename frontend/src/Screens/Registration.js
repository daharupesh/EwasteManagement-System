import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Registration() {
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [cpassword,setCPassword]=useState("")

   const navigate = useNavigate();
   const collectData=async()=>{

    let result = await fetch('http://localhost:8003/api/register',{
      method : 'post',
      body : JSON.stringify({name,email,password,cpassword}),
      headers :{
        'Content-Type' : 'application/json'
        // 127.0.0.1
      },
      
    });
    result = await result.json();
    console.log(result);
    if(result.status===422){
      
      alert(result.message)
    }else if(result.status ===200) {
            alert(result.message)
            navigate('/login')
    }
}
   
   
   

  return (
    <div>
      <section className="vh-100 bg-image"
  style={{"background-image":"url('https://redlevelgroup.com/wp-content/uploads/2019/04/hands20the20young20sprout20and20our20planet20Earth.jpg"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100 d-flex justify-content-center w-100">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col-12 col-md-1 col-lg-7 col-xl-6 w-100 " >
          <div className="card " style={{"border-radius":"15px"}}>
            <div className="card-body  p-5">
              <h2 className="text-uppercase text-center mb-5"><u>Sign UP</u></h2>

              <form>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={name} onChange={(e)=>setName(e.target.value)} />
                  <label className="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={email} onChange={(e)=>setEmail(e.target.value)} />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                  <label className="form-label" for="form3Example4cg">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" value={cpassword} onChange={(e)=>setCPassword(e.target.value)} />
                  <label className="form-label" for="form3Example4cdg">Repeat your password</label>
                </div>
              
               <div className="d-flex justify-content-center">
                  <button type="button" onClick={collectData}
                    className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-light">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"
                    className="fw-bold mb-5 text-center"><u>Login here</u></Link></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
