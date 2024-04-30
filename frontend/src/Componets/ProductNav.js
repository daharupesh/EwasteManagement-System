import React from 'react'
import { Link } from 'react-router-dom'
// import '../comstomCss/ProductNav.css'
import logo from '../images/navlogo.png'
export default function ProductNav(props) {
  return (
    <div>
  <nav className={`navbar navbar-expand-lg navbar-light bg-${props.bcolor}`}>
   <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="/navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <a className="navbar-brand mt-2 mt-lg-0" href="/">
        {/* <h2>Digital Rubbish</h2> */}
        <img
          src={logo}
          height="25"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link text-light" to="/login/ProductPage"></Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link text-light" to="/ProductPage">ProductCollection</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/Productselling">ProductSelling</Link>
        </li>
      </ul>
  
    </div>
   

 
    <div className="d-flex align-items-center">

      <Link className="text-reset me-3" to={`/Productselling/${props.ProductC}`}>
        <i className="fas fa-shopping-cart"></i>
      </Link>

      {/* <!-- Notifications -->
      <div className="dropdown">
        <a
          className="text-reset me-3 dropdown-toggle hidden-arrow"
          href="/"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-bell"></i>
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a className="dropdown-item" href="/">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="/">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="/">Something else here</a>
          </li>
        </ul>
      </div> */}
       <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
      </span>
     </form>
      {/* <!-- Avatar --> */}

      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="/"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="/">My profile</a>
          </li>
          {/* <li>
            <a className="dropdown-item" href="/">Settings</a>
          </li> */}
          <li>
            <a className="dropdown-item" href="/">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}
    </div>
  )
}
