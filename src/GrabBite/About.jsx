import React, { useState } from 'react';
import videoimg from '../Img/video-img.png';
import { FaCheck, FaYoutube } from 'react-icons/fa';
import './CSS/About.css';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import Aboutbg from '../Img/Aboutusimg.jpg'
const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="8uEV4fwGynU" onClose={() => setIsOpen(false)} />
           
            <section className="about-sec py-5">
                <div className="container">
                    <div className="row max-contents justify-content-between align-items-center">
                        <div className="col-lg-6 custom-bgg relative">
                            <img src={Aboutbg}
                                alt="" />
                        </div>
                        <div className="col-lg-6 custom-about d-flex justify-content-center ">
                            <div className="about-content">
                                <h6>About Us</h6>
                                <h3 className=''>Real Delicious <span className="foods text-danger">FOOD </span>
                                    Straight To Your Table</h3>
                                <p>food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
                                <div className="row align-items-center justify-content-between">
                                    <div className=" col-md-4 p-0 custom-sec" onClick={() => setIsOpen(true)}>
                                        <img src={videoimg} alt="" />
                                        <li className='my-item'><FaYoutube /></li>
                                    </div>
                                    <div className="col-md-8 p-0 my-list">
                                        <ul className="items">
                                            <li><span><FaCheck /></span> Delicious & Healthy Foods</li>
                                            <li><span><FaCheck /></span>Best Price & Offers</li>
                                            <li><span><FaCheck /></span>Made By Fresh Ingredients</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
