import React from 'react'

export default function CardAboutUs(props) {
  return (
    <div>
    <div class="card" style={{"width":"18rem"}}>
  <img src={props.img} class="rounded-circle p-5" style={{"height":"300px"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-success text-center  ">{props.name}</h5>
    <p class="card-text"></p>
    {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
 </div>
</div>
    </div>
  )
}
