import React from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import MainPage1 from '../MainPage1'
export default function Dashboard() {
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
   <MainPage1/>
    </div>
  </main>
</div>
  )
}
