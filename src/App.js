import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './GrabBite/Cart';
import Menu from './GrabBite/Menu';
import Abouts from './GrabBite/Routing/Abouts';
import Shop from './GrabBite/Routing/Shop';
import Admin from './Admin/Admin';
import Contact from './GrabBite/Routing/Contact';
import Login from './GrabBite/Login';
import Register from './GrabBite/Register';
import Checkout from './GrabBite/Checkout';
import { CartProvider } from './CartContext';
import Home from './GrabBite/Routing/Home';
import Restorant from './Restorant/Restorant';
import ProductList from './Restorant/ProductList';
import Customer from './CustomerDashBoard/Customer';
import NotFound from './GrabBite/NotFound';

import { RestaurantProvider } from './Restorant/RestorantContext';

const Loading = () => (
  <div className="content">
    <div className="loading">
      <div></div>
      <div></div>
    </div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };

    return () => {
      window.onload = null; 
    };
  }, []);

  return (
    loading ? (<Loading />)
    : (
      <CartProvider>
        <RestaurantProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Abouts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/resto" element={<Restorant />} />
              <Route path="/list/:restaurantName" element={<ProductList />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </RestaurantProvider>
      </CartProvider>
    )
  );
};

export default App;
