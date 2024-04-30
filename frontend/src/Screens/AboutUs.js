import React from 'react'
import CardAboutUs from '../Componets/CardAboutUs'
import img1 from '../images/rupesdaha.jpg'
// import img2 from '../images/ashok.jpg'
import img3 from '../images/sarmpdl.jpg'
import Navbar2 from '../Componets/Navbar2'

export default function AboutUs() {
  return (
    <>
    <div>
    <div className='sticky-top'><Navbar2 theme="dark" home="light" btncolor="light" aboutus="About Us" contactus="Contact Us"/></div>
    </div>
    <div >
      <div className='container-fluid text-center mt-6'><h1>Our Team Members</h1></div>
      <div>
        <div className='dflex author-box'>
            <div className='item'>
             <CardAboutUs img={img1} name="Rupesh Kumar Daha"/>
            </div>
            <div className='item'>
             <CardAboutUs img={img3} name="Sarmila Paudel"/>
            </div>
            {/* <div className='col-3' >
             <CardAboutUs img={img1} name="Priya Chaudhary"/>
            </div>
            <div className='col-3'>
             <CardAboutUs img={img2} name="Ashok B.k."/>
            </div> */}

        </div>
      </div>
    </div>
    </>
  )
}
