import React, { useState } from 'react';
import Header from '../GrabBite/Header';
import Footer from '../GrabBite/Footer';
import RestoData from './restodata';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../GrabBite/CSS/restorant.css';
import toggleimg from '../Img/toggle-btns.webp'
import { useRestaurant } from './RestorantContext';

const Restorant = () => {
    const [toggle, setToggle] = useState(false);
    const { setSelectedRestaurant } = useRestaurant();

    const handleClick = () => {
        setToggle(!toggle);
    };

    const handleRestaurantClick = (restaurantName) => {
        setSelectedRestaurant(restaurantName);
    };


    return (
        <>
            <Helmet>
                <meta name="description" content="This is my home page" />
                <title>Restorant Page</title>
            </Helmet>
            <Header />
            <section className='restorant_page p-5'>
                <div className='container'>
                    <div className="onlyMobile">
                        <div className="toogle_box" onClick={handleClick}>
                            <img src={toggleimg} alt="" />
                        </div>
                        {toggle ? (
                            <ul className='pb-4 mb-block'>
                                <li>filter</li>
                                <li>sort by</li>
                                <li>fast delivery</li>
                                <li>new on grabbite</li>
                                <li>pure veg</li>
                                <li>offers</li>
                                <li>rs.200-rs.300</li>
                                <li>less than rs.200</li>
                            </ul>
                        ) : null}
                    </div>
                    <h3> Restaurants with online food delivery in Chandigarh</h3>

                    <div className="onlyDesktop">
                        <ul className='pb-4'>
                            <li>filter</li>
                            <li>sort by</li>
                            <li>fast delivery</li>
                            <li>new on grabbite</li>
                            <li>pure veg</li>
                            <li>offers</li>
                            <li>rs.200-rs.300</li>
                            <li>less than rs.200</li>
                        </ul>
                    </div>

                    <div className='row'>
                        {Object.keys(RestoData).map((restaurant) => (
                            RestoData[restaurant].map((item,index) => (

                                <div className='resto_box col menubar m-0' key={index}  id={item.id} onClick={() => handleRestaurantClick(restaurant)}>
                                    <Link to={`/list/${restaurant}`} className="restaurant-link">
                                        <div className="float_boxinner">
                                            <div className="resto_img">
                                                <img src={item.image} alt="" />
                                                <div className="shadow_box">
                                                    <span>{item.prize}</span>
                                                </div>
                                            </div>

                                            <div className="resto_content">
                                                <h5 className="resto_name">{item.restoname}</h5>
                                                <h5>
                                                    <i className="rating"></i>
                                                    <span className="xyds">{item.xyds}</span>
                                                    <span className="timing">{item.time}</span>
                                                </h5>
                                                <h6 className="product_name">{item.dish}</h6>
                                                <span className="address">{item.location}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Restorant;
