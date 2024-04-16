import React, { useState } from 'react';
import Footer from './Footer';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import Header from './Header';
import './CSS/Cart.css';
import { Helmet } from 'react-helmet';

const Cart = () => {
  const { cartItem, quantities, updateQuantity, deleteItem, applyCoupon, discountedTotalAmount, discountApplied, appliedCoupon } = useCart();
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
  if (couponCode.trim() !== '') { // Check if the coupon code is not empty
    applyCoupon(couponCode);
    setCouponCode(''); // Clear the coupon code input field
  } else {
    alert('Please enter a valid coupon code');
  }
};

  return (
    
    <>
    <Helmet>
     <title>Cart Page</title>
    <meta name="description" content="This is my Cart page" />
   
    </Helmet>
      <Header />
      <section className="cart p-5">
        <div className="container">
          {cartItem.length === 0 ? (
            <>
              <div className="cart_empty mb-3">
                <p>Your cart is empty.</p>
              </div>
              <button className="btn btn-success p-3 rounded-3 m-auto d-flex justify-content-center w-25">
                <Link to="/#products">back to shop</Link>
              </button>
            </>
          ) : (
            <>
              <h2 className="text-center pb-4">Your <span>Cart</span></h2>
              <div className="cart-bx">
                <div className="table-responsive">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th>PRODUCTS</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>SUBTOTAL</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItem.map((curElm, index) => (
                        <tr key={index} className="mb-3" id={curElm.id}>
                          <td>
                            <img src={curElm.img} alt="" className="img-fluid" />
                          </td>
                          <td>{curElm.product}</td>
                          <td>
                            <div className='quantity-box'>
                              <span className="" onClick={() => updateQuantity(index, quantities[index] - 1)}>-</span>
                              <span className="quantity">{quantities[index]}</span>
                              <span className="" onClick={() => updateQuantity(index, quantities[index] + 1)}>+</span>
                            </div>
                          </td>
                          <td>₹{(quantities[index] * parseFloat(curElm.price)).toFixed(2)}</td>
                          <td onClick={() => deleteItem(index)}>
                            <FaTrash />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row coupon-apply">
                  <div className="col-lg-6 pe-5  p-0">
                    <div className='cartbtns d-flex justify-content-around mt-3'>
                      <input 
                        type="text" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)} 
                        className='w-75 p-2' 
                        placeholder='Enter Your Coupon Code Here' 
                      />
                      <button onClick={handleApplyCoupon} className="p-2 btn btn-success">Apply Coupon</button>
                    </div>
                    
                  </div>
                  <div className="col-lg-6 ps-5 mt-3">
                    {discountApplied && (
                      <p>Coupon '{appliedCoupon}' applied successfully! </p>
                    )}

                    <ul className="d-flex justify-content-between between cart-list">
                      <li>Total</li>
                      <li className="fw-bold">₹{discountedTotalAmount}</li>
                    </ul>
                    <button className="w-100 checkout">
                      <Link to="/checkout">Checkout Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
