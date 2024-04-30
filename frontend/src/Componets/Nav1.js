import React from 'react'
import '../comstomCss/Nav.css';
 import { Link } from 'react-router-dom'
export default function Nav1() {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
 
    <div className="container-fluid">
    
        <Link className="navbar-brand" >Brand</Link>

   
        <ul className="navbar-nav d-flex flex-row me-1">
            <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link text-white" ><i className="fas fa-envelope mx-1"></i> Contact</Link>
            </li>
            <li className="nav-item me-3 me-lg-0">
                <Link className="nav-link text-white" ><i className="fas fa-cog mx-1"></i> Settings</Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white"  id="navbarDropdown" role="button"
                data-mdb-toggle="dropdown" aria-expanded="false"> <i className="fas fa-user mx-1"></i> Profile </Link>
            
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                        <Link className="dropdown-item" >My account</Link>
                    </li>

                    <li>
                        <Link className="dropdown-item" >Log out</Link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
 

</nav>
</div>

    
  )
}

