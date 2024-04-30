import React from 'react'
// import Nav1 from '../Componets/Nav1'
// import Home from "../Screens/Boody"
import ProductNav from '../Componets/ProductNav'
import BodyProduct from './BodyProduct'

export default function ProductPage() {
  return (
    <>
      <div className='sticky-top'><ProductNav bcolor="secondary" ProductC="ProductViewCart"/></div> 
      <div><BodyProduct/></div>
    </>
  )
}
