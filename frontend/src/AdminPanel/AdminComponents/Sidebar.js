import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <nav
       id="sidebarMenu"
       className="collapse d-lg-block sidebar collapse bg-white"
       >
    <div className="position-sticky">
      <div className="mt-4">
        <Link
          to="/Dashboard"
           className="list-group-item list-group-item-action py-2 ripple"
           aria-current="true"
           >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i
            ><span>Main dashboard</span>
        </Link>
        
        <Link
          to="/Dashboard/Order"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></Link
          >
        
        <Link
          to="/Dashboard/CollectionView"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-building fa-fw me-3"></i
          ><span>Veiw Collection</span></Link>
        <Link
          to="/Dashboard/AddProduct"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-calendar fa-fw me-3"></i
          ><span>Add Products</span></Link>

          <Link
           to="/Dashboard/ViewProduct"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-globe fa-fw me-3"></i
          ><span>View Product</span></Link>

        <Link
          to="/Dashboard/UserView"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-users fa-fw me-3"></i><span>Users</span></Link>
        <Link
          to="/Dashboard/ProductSale"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-money-bill fa-fw me-3"></i><span>Product Sales</span></Link>
        <Link
          to="/Dashboard/Employee"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-money-bill fa-fw me-3"></i><span>Add Employee</span></Link>
        <Link
          to="/Dashboard/EmployeeWork"
           className="list-group-item list-group-item-action py-2 ripple"
           ><i className="fas fa-money-bill fa-fw me-3"></i><span>Employee works</span></Link>
      </div>
    </div>
  </nav>
    </div>
  )
}
