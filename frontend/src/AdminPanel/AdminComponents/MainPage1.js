import React from 'react'

export default function MainPage1() {
  return (
    <div>
    <section>
      <div className="row">
        <div className="col-6 col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between p-1">
                <div className="d-flex flex-row">
                  <div className="align-self-center">
                    <i className="fas fa-pencil-alt text-info fa-3x me-4"></i>
                  </div>
                  <div>
                    <h4>Total Users</h4>
                    <p className="mb-0"></p>
                  </div>
                </div>
                <div className="align-self-center">
                  <h2 className="h1 mb-0">18000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between p-1">
                <div className="d-flex flex-row">
                  <div className="align-self-center">
                    <i
                       className="far fa-comment-alt text-warning fa-3x me-4"
                       ></i>
                  </div>
                  <div>
                    <h4>Total Employee</h4>
                    <p className="mb-0"></p>
                  </div>
                </div>
                <div className="align-self-center">
                  <h2 className="h1 mb-0">2355</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between p-md-1">
                <div className="d-flex flex-row">
                  <div className="align-self-center">
                    <h2 className="h1 mb-0 me-4">Rs 645600</h2>
                  </div>
                  <div>
                    <h4>Total Sales</h4>
                    <p className="mb-0">Monthly Sales Amount</p>
                  </div>
                </div>
                <div className="align-self-center">
                  <i className="far fa-heart text-danger fa-3x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between p-md-1">
                <div className="d-flex flex-row">
                  <div className="align-self-center">
                    <h2 className="h1 mb-0 me-4">Rs 36000</h2>
                  </div>
                  <div>
                    <h4>Total Cost</h4>
                    <p className="mb-0">Monthly Cost</p>
                  </div>
                </div>
                <div className="align-self-center">
                  <i className="fas fa-wallet text-success fa-3x"></i>
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
