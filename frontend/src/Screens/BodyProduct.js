import React from 'react'
import Card from '../Componets/Card'
import Footer from '../Componets/Footer'
export default function BodyProduct() {
  return (
    <>
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
    <div className='container-fluid border border-secondary my-3  mr-2 mb-2' style={{"background":"#FDF5E6","padding":"40px"}}>
      <div className="row ">
        <div className='col col-md-3 offset-1'>
          <Card img1="https://lms.chanakyamandal.org/wp-content/uploads/2021/02/E-Waste-Management-Market-Blog.jpg" price="50"/>
          </div>
        <div className='col col-md-3 offset-1'>
          <Card img1="https://householdquotes.co.uk/wp-content/uploads/Laptop-screen-repair1.jpg" price="60"/>
          </div>
        <div className='col col-md-3 offset-1 mb-3'>
          <Card img1="https://5.imimg.com/data5/SELLER/Default/2022/2/RZ/NX/JF/49995713/e-waste-disposal-500x500.jpg" price="70"/>
        </div>
      </div>
  </div>
 </div>
 <div>
  <Footer color="gray" btncolor="primary"/>
 </div>
    </>
  )
}
