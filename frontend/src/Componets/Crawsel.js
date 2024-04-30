import React from 'react'
import crawsel1 from '../images/img1.jpg'
import "../comstomCss/crawsel.css"
// import crawsel2 from '../images/9.jpg'
// import crawsel3 from '../images/8.jpg'

export default function Crawsel() {
  return (
    <div>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner"  >
    <div className="carousel-item active" style={{"height":"600px"}} data-bs-interval="3000">
      <img src={crawsel1} className="d-block w-100 " style={{"height":"100%","width":'50%',"filter":" brightness(60%)"}}  alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block " style={{"margin-bottom":"200px"}}>
        
        <h5 className='text-success fs-1 fw-bolder'> <q className='fs-1'> Recycle e-waste for a better tommorrow <br/>
       Dispose your old phone or related accessories & contribute <br/>
         towards a safter environmnet</q></h5>
      </div> */}
    </div>
    <div className="carousel-item " style={{"height":"600px"}} data-bs-interval="3000" >
      <img src="https://interethiopia.com/wp-content/uploads/2023/03/zero-carbon-emmision1-1024x759.jpg" className="d-block w-100 " style={{"height":"100%","width":'50%',"filter":" brightness(50%)"}} alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block" style={{"margin-bottom":"200px"}}>
      <h5 className='text-success fs-1 fw-bolder'> <q className='fs-1'> Recycle e-waste for a better tommorrow <br/>
       Dispose your old phone or related accessories & contribute <br/>
         towards a safter environmnet</q></h5>
      </div> */}
    </div>
    <div className="carousel-item " style={{"height":"600px"}} data-bs-interval="3000">
      <img src="https://www.lg.com/in/recycling/images/sl02.jpg" className="d-block w-100 " style={{"height":"100%","width":'50%',"filter":" brightness(40%)"}} alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block" style={{"margin-bottom":"200px"}}>
      <h5 className='text-success fs-1 fw-bolder'> <q className='fs-1'> Recycle e-waste for a better tommorrow <br/>
       Dispose your old phone or related accessories & contribute <br/>
         towards a safter environmnet</q></h5>
      </div> */}
      {/* style={{"margin-bottom":"200px"} */}
     </div>
     <div className="carousel-caption d-none d-md-block mb-5" >
      <h5 className='text-secondary fs-1 fw-bolder'> <q className='fs-1'> Recycle e-waste for a better tommorrow <br/>
       Dispose your old phone or related accessories & contribute <br/>
         towards a safter environmnet</q></h5>
      </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
