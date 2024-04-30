import React from 'react'



export default function ViewCart() {
  const handleDelete = async(id)=>{
    const url=`http://localhost:8003/api/product/collection/${id}`;
    console.log(url)
    await fetch(url)
    TouchEvent((res)=>res.json())
    .then((data)=>alert("details remove successfully"));
  }
  return (
    <div>
      <section style={{"background-color": "#eee","margin-top":"20px"}}>
     <div className="container-fluid py-3">
    <div className="row justify-content-center mb-3">
      <div className="col-md-12 col-xl-10">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                  <img src="https://5.imimg.com/data5/SELLER/Default/2022/6/ML/QU/LH/1977620/used-hp-elitebook-1030-x-360-g2-laptop-250x250.jpg" alt="" className="w-100" />
                  <a href="#!">
                    <div className="hover-overlay">
                      <div className="mask" style={{"background-color": "rgba(253, 253, 253, 0.15)"}}></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6">
                <h5>Product Quantity:</h5>
                <div className="d-flex flex-row mt-2 mb-3">
                  <span>Name of Product: </span>
                </div>
                <div className="mb-2 ">
                  <h4>Product Decription:</h4>
                </div>
                <p className="text-bold mb-4 mb-md-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">Total amount:</h4>
                  <span className="text-secondary">$20.99</span>
                </div>
               
               
                  <div className="d-flex flex-column mt-4">
                   <button className="btn btn-outline-primary btn-sm mt-2" onClick={()=>handleDelete()} type="button">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
