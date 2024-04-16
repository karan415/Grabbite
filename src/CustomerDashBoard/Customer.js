import React from 'react'
import Header from '../GrabBite/Header';
import Footer from '../GrabBite/Footer';
import Sidebar from './Sidebar'
import { Helmet } from 'react-helmet';
const Customer = () => {
  return (
    <>
    <Helmet>
    <meta name="description" content="This is my home page" />
    <title>Customer Dashboard Page</title>
    </Helmet>
    <Header />
    <Sidebar/>
    <Footer />
    </>
  )
}

export default Customer