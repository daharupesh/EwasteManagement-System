import React from 'react'

export default function SalePage() {
  return (
    <div>
    <section className="mb-4">
      <div className="card">
        <div className="card-header py-3">
          <h5 className="mb-0 text-center"><strong>Sales</strong></h5>
        </div>
        <div className="card-body">
          <canvas className="my-4 w-100" id="myChart" height="380"></canvas>
        </div>
      </div>
    </section>
    </div>
  )
}
