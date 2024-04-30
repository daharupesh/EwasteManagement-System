import React from 'react'
export default function SellingCard() {
  return (
    <div>
<section style={{"background-color": "#eee"}}>
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
                <h5>Quant trident shirts</h5>
                <div className="d-flex flex-row mb-3">
                  <div className="text-danger mb-1 me-2">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <span>310</span>
                </div>
                <div><h3>Descriptions:</h3></div>
                {/* <div className="mt-1 mb-0 text-muted small">
                  <span>100% cotton</span>
                  <span className="text-primary"> • </span>
                  <span>Light weight</span>
                  <span className="text-primary"> • </span>
                  <span>Best finish<br /></span>
                </div>
                <div className="mb-2 text-muted small">
                  <span>Unique design</span>
                  <span className="text-primary"> • </span>
                  <span>For men</span>
                  <span className="text-primary"> • </span>
                  <span>Casual<br /></span>
                </div> */}
                <p className="text-bold mb-4 mb-md-0">
                  There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">$13.99</h4>
                  <span className="text-danger"><s>$20.99</s></span>
                </div>
                <h6 className="text-success">buy this</h6>
                <div className="d-flex flex-column mt-4">
                  <button className="btn btn-primary btn-sm" type="button">Details</button>
                  <button className="btn btn-outline-primary btn-sm mt-2" type="button">
                    Add to Cart
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
