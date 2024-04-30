import React,{useState} from 'react'
import "./ProductPage"
import "../comstomCss/login1.css";
import img1 from '../imgLogin/wave.png'
import img2 from '../imgLogin/bg.svg'
import img3 from '../imgLogin/avatar.svg';
import { Link, useNavigate } from 'react-router-dom'
import Navbar2 from '../Componets/Navbar2';
export default function Login() {
    const[email,setEmail]=useState('');
	const[password,setPassword]=useState('');
	const navigate = useNavigate();


	const LoginUser=async(e)=>{
		e.preventDefault()

		if(email ===""){
			alert("Please Enter email")
		}else if(password ===""){
			alert("Please Enetr password")
		}else{
			
		try {
			let result = await fetch('http://localhost:8003/api/login',{
				method : 'POST',
				body : JSON.stringify({email,password}),
				headers :{
				  'Content-Type' : 'application/json'
				},
			  });
			  let data = await result.json();
	
			  
			  if(data){
				
				localStorage.setItem("user",JSON.stringify(data))
				console.log(data?.data?.role)
				if(data?.data?.role === "Admin") {
					navigate("/Dashboard")
					alert("Admin login Successful")
				}
				else{
					alert("Login Successful")
					navigate("/ProductPage");
				}
	
			  }
			  else if (data === null){
				alert("Wrong email and passowrd")
				navigate("/login");
			  }
			
		} catch (error) {
			console.log(error);
			
		}
	



		}
		

	     
	}

  return (
    <>
    <div className='sticky-top'><Navbar2  theme="antiquewhite" home="secondary" btncolor="success"  aboutus="" contactus="" /></div>
    <div>
	 	
      <img className="wave" src={img1} alt="" />
	<div className="container">
		<div className="img">
			<img src={img2} alt="" />
		</div>
		<div className="login-content" >

			<form className='card p-5'>
				<img src={img3} alt="" />
				<h2 className="text-secondary title">E-WASTE</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<input type="text" placeholder='Username' className="input text-secondary" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<input type="password" placeholder="Password"className="input text-secondary"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            	   </div>
            	</div>
            	<Link href="/" className='text-secondary'>Forgot Password?</Link>
	
            	<input type="submit"  onClick={LoginUser}className="btn1" value="Login"/>
            </form>
        </div>
    </div>
    </div>
    </>

  )
}
