import React from 'react'

export default function TopNavbar() {
  return (
    <div>
       <nav
       id="main-navbar"
       className="navbar navbar-expand navbar-light bg-white fixed-top"
       >
    {/* <!-- Container wrapper --> */}
    <div className="container-fluid">
      {/* <!-- Toggle button --> */}
      <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="/sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <i className="fas fa-bars"></i>
      </button>

      {/* <!-- Brand --> */}
      <a className="navbar-brand" href="/">
        <img src="https://events.umich.edu/media/cache/event_large_lightbox/media/attachments/2018/02/event_50026_original.png"
             height="25"
             alt=""
             loading="lazy"
             />
      </a>
      {/* <!-- Search form --> */}
      

      {/* <!-- Right links --> */}
      <ul className="navbar-nav ms-auto d-flex flex-row">
        {/* <!-- Notification dropdown --> */}
        <li className="nav-item dropdown">
        <form className="d-none d-md-flex input-group w-auto my-auto">
        <input
               autocomplete="off"
               type="search"
               className="form-control rounded"
               placeholder='Search (ctrl + "/" to focus)'
               style={{"min-widthzzzz":"225px"}}
               />
        <span className="input-group-text border-0"
              ><i className="fas fa-search"></i
          ></span>
      </form>
        </li>

        {/* <!-- Avatar --> */}
        <li className="nav-item dropdown">
          <a
             className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
             href="/"
             id="navbarDropdownMenuLink"
             role="button"
             data-mdb-toggle="dropdown"
             aria-expanded="false"
             >
            <img
                 src="https://lh3.googleusercontent.com/a/AGNmyxZb_BGeGSQ42v4qb2psHqse50GsBsN1DxLk5Vgc=s360"
                 className="rounded-circle"
                 height="22"
                 alt=""
                 loading="lazy"
                 />
          </a>
          <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
              >
            <li><a className="dropdown-item" href="/">My profile</a></li>
            <li><a className="dropdown-item" href="/">Settings</a></li>
            <li><a className="dropdown-item" href="/">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  )
}
