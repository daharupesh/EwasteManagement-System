import React from 'react'
import Card from '../Componets/Card1'

export default function Boody() {
  return (
    <>
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
    <div className='container-fluid border border-secondary my-3 ml-2 mr-2'>
      <div className="row">
            <div className='col col-sm-4'><Card name="Mobiles" img1="https://lms.chanakyamandal.org/wp-content/uploads/2021/02/E-Waste-Management-Market-Blog.jpg"/></div>
            <div className='col col-sm-4'><Card name="Desktops and others" img1="https://www.tatapower.com/images/box1-img.png"/></div>
            <div className='col col-sm-4'><Card name="Laptops" img1="https://www.roadrunnerwm.com/hubfs/ElectronicWaste_Hero.jpg"/></div>
      </div>
    
    </div>
   
    </>
  )
}
