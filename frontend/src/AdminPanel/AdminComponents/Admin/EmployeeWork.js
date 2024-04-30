import React from 'react'
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import EmWorkEmail from '../EmWorkEmail'

export default function EmployeeWork() {
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
       <EmWorkEmail/>
        </div>
      </main>
    </div>
  )
}
