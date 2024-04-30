import React from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
// import MainPage1 from '../MainPage1'
// import ProductViewCart from '../../../Screens/ProductViewCart'
// import SellingCard from '../../../Componets/SellingCard'
// import CardViewCollection from '../CardViewCollection'
import ViewCollectionTable from '../ViewCollectionTable'
export default function CollectionView() {
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
<h1 className='text-center'>Lists of Collected E-Products from the Users:</h1>
  <div className="container pt-4">
   {/* <ProductViewCart/> */}
  <ViewCollectionTable/>
    </div>
  </main>
</div>
  )
}
