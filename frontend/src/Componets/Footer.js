import React from 'react'
import img from '../imgLogin/footerimg.png'

export default function Footer(props) {
  return (
    <div>
         <footer className="py-5" style={{"background":`${props.color}`}}>
    <div className="row">
      <div className="col-8 col-md-2 mb-3">
        <img src={img} style={{"width":"350px","height":"200px"}} alt="" />
        
        
      </div>

      <div className="col-6 col-md-2 mb-3 mt-4">

      <h5 className='mb-4 text-info' style={{"margin-left":"180px"}}>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Home</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Features</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">Pricing</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">FAQs</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-light">About</a></li>
        </ul>
      </div>

      <div className="col-8 col-md-2 mb-3 mt-3">
       
       
      </div>

      <div className="col-md-5 offset-md-1 mb-3 mt-4">
        <form>
          <h5 className='text-danger fs-2 fw-bold'>Connect with our Digital Rubish (E-waste)</h5>
          <p className='text-light'>Together Lets Re-contruct Our Planet Earth</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className={`btn btn-${props.btncolor}`} type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top" style={{"margin-right":"20px"}}>
      <p className='text-center text-light'>&copy; 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex mr-4">
        <li className="ms-3"><a className="link-body-emphasis" href="https://www.instagram.com/awadhesh.gupta.754918/" target="blank">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-full-gradient-colour-background.png" alt="" style={{"width":"30px","height":"30px"}}/></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="https://www.facebook.com/ramcharan.mandal.1422" target="blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/900px-Facebook_Logo_%282019%29.png" alt="" style={{"width":"30px","height":"30px"}}/> </a></li>
        <li className="ms-3"><a className="link-body-emphasis mr-4" href="https://twitter.com/daha_rupesh" target="blank"><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" style={{"width":"30px","height":"30px"}}/></a></li>
      </ul>
    </div>
  </footer>
      
</div>
  )
}
