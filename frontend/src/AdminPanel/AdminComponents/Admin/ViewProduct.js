import React, { useEffect } from 'react'
import ViewProductTable from '../ViewProductTable'
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'

export default function ViewProduct() {

    

    
  return (
    <div>    
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
       <ViewProductTable/>
        </div>
      </main>
    </div>
      )
  
}
