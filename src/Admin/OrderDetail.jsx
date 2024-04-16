
import React from 'react'
import product from '../Img/RestoPizza2.png'
import { FaFacebook } from 'react-icons/fa6'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const UserDetails = () => {
    return (
        <>
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <section className='order-section p-5'>
                            <div className='container-fluid'>
                                <h2 className='text-center py-3'> Order Details</h2>
                                <div className="allorder">
                                    <div className="user-details">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <div className="user-img">
                                                    <img src={user} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="user-information row">
                                                    <div className='col-lg-6'>

                                                        <ul>
                                                            <li>Name:<span>Herry</span></li>
                                                            <li>Address: <span>Phase7/sector112/building-no:113</span></li>
                                                            <li>Email: <span>herry@gmail.com</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <ul >
                                                            <li><FaFacebook /><Link to='https://www.facebook.com/' target='blank'>https://www.facebook.com/</Link></li>
                                                            <li><FaInstagram /><Link to='https://www.instagram.com' target='blank'> https://www.instagram.com</Link></li>
                                                            <li><FaTwitter /><Link to='https://www.twitter.com' target='blank'>https://www.twitter.com </Link></li>
                                                            <li><FaYoutube /><Link to='https://www.youtube.com' target='blank'> https://www.youtube.com</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-detail py-4">
                                            <h3 className='pb-3'>product details</h3>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope='col'>Product</th>
                                                        <th scope='col'>Image</th>
                                                        <th scope='col'>Prize</th>
                                                        <th scope='col'>qty</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="col">#144</th>
                                                        <td data-label='product' >Product</td>
                                                        <td data-label='Image' ><img src={product} alt="" /></td>
                                                        <td data-label='Prize' >$240.900</td>
                                                        <td data-label='qty' >4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="col">#144</th>
                                                        <td data-label='product' >Product</td>
                                                        <td data-label='Image' ><img src={product} alt="" /></td>
                                                        <td data-label='Prize' >$240.900</td>
                                                        <td data-label='qty' >4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="col">#144</th>
                                                        <td data-label='product' >Product</td>
                                                        <td data-label='Image' ><img src={product} alt="" /></td>
                                                        <td data-label='Prize' >$240.900</td>
                                                        <td data-label='qty' >4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="col">#144</th>
                                                        <td data-label='product' >Product</td>
                                                        <td data-label='Image' ><img src={product} alt="" /></td>
                                                        <td data-label='Prize' >$240.900</td>
                                                        <td data-label='qty' >4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="col">#144</th>
                                                        <td data-label='product' >Product</td>
                                                        <td data-label='Image' ><img src={product} alt="" /></td>
                                                        <td data-label='Prize' >$240.900</td>
                                                        <td data-label='qty' >4</td>
                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="order-summry">
                                            <div className="summry-inner col-lg-6">
                                                <h3>order summary</h3>
                                                <ul>
                                                    <li>payment type <span>COD</span></li>
                                                    <li>subtotal <span>$126.00</span></li>
                                                    <li>total <span>$126.00</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDetails