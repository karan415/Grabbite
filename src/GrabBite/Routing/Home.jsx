import React from 'react'
import Header from '../Header'
import Service from '../Service'
import About from '../About';
import Menu from '../Menu';
import Order from '../Order'
import Popular from '../Popular';
import Deal from '../Deal';
import Delicious from '../Delicious';
import Footer from '../Footer';
import Show from '../Show';
import Banner from '../Banner';
import { Helmet } from 'react-helmet';
const Home = () => {
  return (
    <>
      <Helmet>
      <meta name="description" content="Nested component" />
        <title>Home Page</title>
      </Helmet>
      <div>
        <Header />
        <Banner />
        <Service />
        <About />
        <Menu />
        <Order />
        <Popular />
        <Show />
        <Deal />
        <Delicious />
        <Footer />
      </div>
    </>
  )
}

export default Home