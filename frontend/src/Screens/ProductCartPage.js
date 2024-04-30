import React from 'react'
import ProductCart from '../Componets/ProductCart'

export default function ProductCartPage() {
  return (
    <div>
      <section className="h-100" style={{"background-color":"#eee"}}>
  <div className="container-fluid h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0"><span className="text-muted"></span> price <i
                  className="fas fa-angle-down mt-1"></i></p>
          </div>
        </div>
        <div>
        <ProductCart/> 
        </div>
        <div>
          <ProductCart/>
        </div>
        
        
        <div className="card">
          <div className="card-body">
            <button type="button" className="btn btn-secondary btn-block btn-lg">Proceed to Pay</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}
