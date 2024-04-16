import React from 'react'
import Header from '../Header'
import About from '../About';
import Menu from '../Menu';
import Order from '../Order'
import Popular from '../Popular';
import Deal from '../Deal';
import Delicious from '../Delicious';
import Footer from '../Footer';
import Show from '../Show';
import { Helmet } from 'react-helmet';
const Abouts = () => {
  return (
    <>
    <Helmet>
    <meta name="description" content="This is my About page" />
    <title>About us Page</title>
    </Helmet>
    <Header/>
    <About />
    <Menu />
    <Order />
    <Popular />
    <Show />
    <Deal />
    <Delicious />
    <Footer/>
    </>
  )
}

export default Abouts