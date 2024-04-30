import React from 'react'
// import { Card } from 'react-bootstrap'
import Crawsel from '../Componets/Crawsel'
import Footer from '../Componets/Footer'
// import Navbar from '../Componets/Navbar'
// import Navbar1 from '../Componets/Navbar1'
import Body from "../Screens/Boody";
import Navbar2 from '../Componets/Navbar2'

export default function Home() {
  return (
    <div>
    <div className='sticky-top'><Navbar2 theme="dark" home="light" btncolor="light" aboutus="About Us" contactus="Contact Us"/></div>
    <div ><Crawsel/></div>
      <div>
      <Body/>
      </div>
    <div><Footer color="black" btncolor="danger"/></div>  
    </div>
  )
}
// {/* <Navbar  aboutus="About Us" contactus="Contact Us"/> */}