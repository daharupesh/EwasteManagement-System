import React from 'react'
import "../comstomCss/ProdcutNav.css"
// import logo1 from '../images/5.jpg'
import { Link } from 'react-router-dom'
export default function Card(props) {
  return (
    <div>
    <div className="card mt-3 ms-4" style={{"width": "18rem"}}>
    <img  src={props.img1} className="card-img-top" alt="..." style={{"height":"200px"}}/>
     <div className="card-body">
     <h5 className="card-title">Price: Rs {props.price} per kg</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/ProductPage/CollectForm" className="btn btn-primary" style={{"margin-left":"50px"}}>Click here</Link>
      </div>
    </div>
    </div>
  )
}


