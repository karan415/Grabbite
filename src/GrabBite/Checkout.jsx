import React from 'react'
import Header from '../GrabBite/Header'
import Footer from '../GrabBite/Footer'
import credit from '../Img/credit-cards.webp';
import gpay from '../Img/googlepay.png'
import paytm from '../Img/upiimg.jpg'
import './CSS/Checkout.css';
import { FaMinus } from 'react-icons/fa';
import { useCart } from '../CartContext';
import CheckoutForm from './CheckoutForm';
const Checkout = () => {
    const { cartItem, quantities, discountedTotalAmount,deleteItem } = useCart()

    return (
        <>
            <Header />
            <section className="checkout p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h6>Billing Details</h6>
                           <CheckoutForm/>
                            <div className="col">
                                <div className="order-box-2">
                                    <label htmlFor="">Select your payment method</label>
                                    <select className="form-select" id="inputGroupSelect01">
                                        <option defaultValue>Credit Card</option>
                                        <option value="1">Debit Card</option>
                                        <option value="2">Cash On Delivery</option>
                                        <option value="4">Three</option>
                                    </select>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="" id="" className="" placeholder="Expiry Date" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="" id="" placeholder="CVV" />
                                        </div>
                                    </div>
                                    <input type="number" name="" id="" placeholder="Enter your card number" />
                                    <input type="submit" value="Checkout Now" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 end">
                            <div>
                                <h6>Order Details</h6>
                                <div className="order-box">
                                    <ul>
                                        <li> <span>Product</span>Total Price</li>
                                        {cartItem.map((curElm, index) => (
                                            <li key={index} id={curElm.id} className='col-12'>
                                                <FaMinus className='col-2' onClick={() => deleteItem(index)} /> <span className='col-8'>{curElm.product} ({quantities[index]})</span> <span className='col-2'>₹{(quantities[index] * parseFloat(curElm.price)).toFixed(2)}</span>
                                            </li>
                                        ))}
                                        <li>Total <span>₹{discountedTotalAmount}</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row myrow align-items-center py-2">
                                <div className="col-lg-4 sm-4 "><img src={credit} alt="" /></div>
                                <div className="col-lg-4 sm-4 "><img src={gpay} alt="" /></div>
                                <div className="col-lg-4 sm-4 "><img src={paytm} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Checkout