import React from 'react'
import Header from './Header'
import Footer from './Footer'
const NotFound = () => {
  return (
    <>
      <Header />
      <section className="py-5 pagenotfound ">
      <div className="container">
      <div className="notfound text-center">
        <h2>Oops! Page not found</h2>
        <h1><span>4</span><span>0</span><span>4</span></h1>
        <p className='fs-3 text-capitalize'>we are sorry, but the page you requested was not found</p>
      </div>
      </div>
      </section>
      <Footer />
    </>
  )
}

export default NotFound