import React from 'react'
import navbarimg from '../images/navlogo.png'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
      
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark ">
        {/* navbar-expand-sm sticky-top */}
        {/* navbar navbar-expand-sm sticky-top navbar-light bg-light */}
        {/* navbar navbar-expand-sm  navbar-dark  bg-dark */}
  <div className="container-fluid">
    <Link className="navbar-brand" id="navimg" href="/"><img src={navbarimg} alt="" style={{"widows":"20px", "height":"40px"}} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" id='homeside'>
          <Link className="nav-link active " aria-current="page" to="/"><button type="button" class="btn btn-outline-secondary"style={{"width":"100px"}}>Home</button></Link>
        </li>
        <li className="nav-item" id='homeside'>
          <Link className="nav-link active  " aria-current="page" to="/"><button type="button" class="btn btn-outline-secondary" style={{"width":"100px"}}>{props.aboutus}</button></Link>
        </li>
        <li className="nav-item" id='homeside'>
          <Link className="nav-link active " aria-current="page" to="/"><button type="button" class="btn btn-outline-secondary" style={{"width":"120px"}}>{props.contactus}</button></Link>
        </li>
        
        <li className="nav-item" id='loginside'>
          <Link className="nav-link" to="/login"><button type="button" className="btn btn-outline-secondary" style={{"width":"90px"}}>Login</button></Link>
        </li>
        <li className="nav-item" id='registerside'>
          <Link className="nav-link" to="/register"><button type="button" className="btn btn-outline-secondary" style={{"width":"90px"}}>Register</button></Link>
        </li>
     
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
