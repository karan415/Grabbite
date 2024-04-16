import React from 'react';
import { useState } from 'react'
import toggleImg from '../Img/coloredtoggle.png'
import Header from '../GrabBite/Header';
import Footer from '../GrabBite/Footer';
import ProductListtab from './ProductListtab';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import ProductData from './productlistdata';
import '../GrabBite/CSS/productlist.css'
const ProductList = () => {
    const { restaurantName } = useParams();
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle)
    }
    // Convert the restaurant name to lowercase to match the keys in ProductData
    const lowerCaseRestaurantName = restaurantName.toLowerCase();

    // Retrieve the menu items for the selected restaurant
    const selectedRestaurantData = ProductData[lowerCaseRestaurantName] || [];
   
    return (
        <>
            <Helmet>
                <meta name="description" content="This is my home page" />
                <title>Listing Page</title>
            </Helmet>
            <Header />
            <section className='ProductList_page p-5'>
                <div className="container">
                    <div className="row">
                    <div className="onlyMobile filterstoggle">
                        <div className="onlyMobile d-flex align-items-center" onClick={handleClick}><img src={toggleImg} alt="" /><span className='ms-2 fs-4'>Products</span></div>
                        {
                            toggle ? (<ProductListtab />) : null
                        }
                        </div>
                        <div className="column_w33 col-md-3 onlyDesktop">
                            <ProductListtab />
                        </div>
                        <div className="column_w75 col-md-9">
                            {selectedRestaurantData.map((curElm,index) => (
                                <div className="items_box1 my-4 row justify-content-center align-items-center" id={curElm.id} key={index}>
                                    <div className="column_w16 col-md-3">
                                        <div className="col25_inner">
                                            <img src={curElm.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="column_w33 w_33 col-md-4">
                                        <div className="col25_inner">
                                            <div className="vegs_type"><img src={curElm.veg_img} alt="" /></div>
                                        </div>
                                        <div className="dish_details">
                                            <h5>{curElm.dishname}</h5>
                                        </div>
                                        <div className="rating"><img src={curElm.rating_img} alt="" /></div>
                                        <div className="dish_description">
                                            <p>{curElm.description}</p>
                                        </div>
                                    </div>
                                    <div className="column_w25 col-md-3">
                                        <div className="col25_inner">
                                            <div className="order_details">
                                                <span>{curElm.minorder}</span>
                                                <span className="delivery_fees">{curElm.delivery_fee}</span>
                                                <h5 className="offer"> {curElm.offer}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column_w25 col-md-2">
                                        <div className="col25_inner">
                                            <div className="cart_btn">
                                                <button className="btn btn-primary">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProductList;
