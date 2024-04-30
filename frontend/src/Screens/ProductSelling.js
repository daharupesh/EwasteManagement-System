import React from 'react'
import ProductNav from '../Componets/ProductNav'
// import Card from '../Componets/Card'
import SellingCard from '../Componets/SellingCard'
import Footer from '../Componets/Footer'
// import SideNav from '../Componets/SideNav'

export default function ProductSelling() {
  return (
    <div>
        {/* <div><SideNav/></div> */}
      <div className='sticky-top'><ProductNav bcolor="secondary" ProductC="ProductCartPage"/></div>
      <div>
      <div className='text-center'>
        <h1 className='mt-3 mb-3  fw-bold'>Product Lists</h1>
      </div>
     <div className='container-fluid'>
     <div className="row">
      <div className='col-md-7 offset-md-3'>
      <form className="d-flex mb-3 w-100" role="search">
      <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark"  type="submit">Search</button>
     </form>
     </div>
     </div>
     </div>
     </div> 
     {/* /* card page */}
     <div>
     <div className='mr-5'> <SellingCard/></div>
     <div> <SellingCard/></div>
     <div> <SellingCard/></div>
     <div> <SellingCard/></div>
     <div> <SellingCard/></div>
     </div>
     <div>
      <Footer color="gray" btncolor="primary"/>
     </div>
    </div>
  )
}
