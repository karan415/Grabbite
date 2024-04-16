import React, { useState } from 'react'
import { IoSettings } from "react-icons/io5";
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
import logo from '../Img/grabbite_logo.png'
import './CSS/Footer.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import FooterData from './FooterApi'
const Footer = () => {
    const [item, setItem] = useState(FooterData)
    return (
        <>
            <footer className='py-5  custom-footer'>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3 ">
                            <div className="footer-logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="footer-content">
                                <p>food, substance consisting essentially of protein,  used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
                                <div classNameName='position'>
                                    <ul className="menus">
                                        <li><span><IoIosMail /></span>Grabbite@gmail.com</li>
                                        <li><span><LuPhoneCall /></span>0177-999-098</li>
                                    </ul>
                                    <ul className="d-flex s-icons">
                                        <li className="social icon"><FaTwitter /></li>
                                        <li className="social icon"><FaInstagram /></li>
                                        <li className="social icon"><FaFacebook /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 ">
                            <ul className='menus first-bold'>
                                <li>Quick Links</li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">Career</a></li>
                                <li><a href="">Wishlist</a></li>
                                <li><a href="">Shoap</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="open_hours">
                                <ul className='menus first-bold'>
                                    <li>Opening Hours</li>
                                    <li>Monday<span>09:00 - 18:00</span></li>
                                    <li>Tuesday<span>09:00 - 18:00</span></li>
                                    <li>Wednesday<span>09:00 - 18:00</span></li>
                                    <li>Thursday<span>09:00 - 18:00</span></li>
                                    <li>Friday<span>09:00 - 18:00</span></li>
                                    <li>Sunday<span>Closed</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 ">
                            <ul className="menus d-flex instamenu first-bold">
                                <li>InstaGram Photo</li>
                                <div className="bg-white rounded-2 ">
                                    <div className="profile p-2 gap-1 d-flex">
                                        <div className="profile-image">
                                            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
                                        </div>
                                        <div className="">
                                            <div className="profile-user-settings justify-content-between">
                                                <h5 className="profile-user-name">janedoe_</h5>
                                                <button className="btn profile-edit-btn">Edit Profile</button>
                                                <button className="btn profile-settings-btn" aria-label="profile settings"><IoSettings /></button>
                                            </div>
                                            <div className="profile-stats">
                                                <ul className='d-flex justify-content-between'>
                                                    <li className='d-inline'><span class="profile-stat-count">164</span> posts</li>
                                                    <li><span className="profile-stat-count">188</span> followers</li>
                                                    <li><span className="profile-stat-count">206</span> following</li>
                                                </ul>
                                            </div>
                                            <div className="profile-bio">
                                                <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex_box gap-1">
                                        {item.map((curElm,index) => {
                                            return (
                                                <>
                                                    <div className="col menubar m-0 p-1 " key={index} id={curElm.id}>
                                                        <div className="bottombarinsta ">
                                                            <img src={curElm.image} alt="" /></div>
                                                    </div>

                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                            </ul>

                        </div>
                    </div>

                </div>

            </footer>
            <div className='copyright p-3'>
                <div className='container'>
                    <div className='row d-flex align-items-center justify-content-between' >
                        <div className='col'>
                            <span> @Copyright 2021 Grabbite</span>
                        </div>
                        <div className='col'>
                            <ul className='d-flex justify-content-end align-items-center '>
                                <li className='pe-2'>Terms & Conditions</li>
                                <li>Privacy policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer