import React from 'react'
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import OrderTable from '../OrderTable'

export default function Order() {
  return (
    <div className='container-fluid'>    
    <header>
     {/* <!-- Sidebar --> */}
      <Sidebar/>
    
      {/* <!-- Sidebar --> */}
     <TopNavbar/>
      </header>
    {/* <!--Main Navigation--> */}
    
    {/* <!--Main layout--> */}
    <main style={{"margin-top":"58px"}}>
      <div className="container pt-4">
       {/* <ProductViewCart/> */}
       <OrderTable/>
        </div>
      </main>
    </div>
  )
}
