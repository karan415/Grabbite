import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <>
      <div className="bg-break-img"></div>
      <section className="custom-order p-5">

        <div className="container">
          <div className="delecious customr_delicious">
            <h1 className='text-light '> Delicious Burger & FrenchFry in Restaurant</h1>
            <h4 className='text-light'>Progressively simplify effective e-tailers and process-centric methods of empowerment. Quickly pontificate parallel.</h4>
            <button className="btn btn-primary bg-light py-3 p-5 rounded-4 fw-bold"><Link to='/resto' className='text-dark'>ORDER NOW</Link></button>

          </div>
        </div>

      </section>
      <div className="bg-break"></div>
    </>
  )
}

export default Order