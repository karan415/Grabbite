import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Menu from '../Menu'
import Delicious from '../Delicious'
import Popular from '../Popular'
import { Helmet } from 'react-helmet';

const Shop = () => {
  return (
    <>
    <Helmet>
    <meta name="description" content="This is my home page" />
    <title>Shop Page</title>
    </Helmet>
    <Header/>
    <Menu/>
    <Popular/>
    <Delicious/>
    <Footer/>
    </>
  )
}

export default Shop