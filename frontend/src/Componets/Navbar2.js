import React from 'react'
import navbarimg from '../images/navlogo.png';
import { Link } from 'react-router-dom'
export default function Navbar2(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg  navbar-${props.theme} bg-${props.theme} `} >
        {/* navbar navbar-expand-lg sticky-top navbar-dark bg-dark */}
    <div className="container-fluid">
 
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" 
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
    

    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link className="navbar-brand" to="" ><img src={navbarimg} alt="" style={{"widows":"20px", "height":"40px"}} /></Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.home}`} aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus" >{props.aboutus}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactus" >{props.contactus}</Link>
        </li>
       
       
      </ul>
      <form className="d-flex">
      <Link className="nav-link" to="/login" ><button type="button" className={`btn btn-outline-${props.btncolor}`} style={{"width":"90px"}}>Login</button></Link>
      <Link className="nav-link" to="/register" ><button type="button" className={`btn btn-outline-${props.btncolor}`} style={{"width":"100px"}}>Register</button></Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
