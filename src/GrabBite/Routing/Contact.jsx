import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { AiOutlineGlobal} from 'react-icons/ai'
import { IoLocationOutline,IoMail } from "react-icons/io5";
import {IoIosCall } from "react-icons/io";

import { Helmet } from 'react-helmet';
const Contact = () => {
return (
<>
<Helmet>
    <meta name="description" content="This is my Contact Us page" />
    <title>Contact Us Page</title>
    </Helmet>
    <Header />
    <section class="contactus p-5">
        <div class="container">
            <div class="contactinner">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="your-address my-3">
                            <h2>Contact Us</h2>
                            <h5>Get In Touch With Us</h5>
                            <p class="py-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse suscipit vel culpa dolorem
                                alias voluptatem natus harum corporis voluptates, illo ex velit deserunt aperiam maxime
                                animi repellat atque, minima totam!</p>
                            <h4>
                                <IoLocationOutline /> State punjab City Mohali Phase 7 123 Sector
                            </h4>
                            <h4>
                                <IoIosCall /> 123-321-2312
                            </h4>
                            <h4>
                                <IoMail /> yash@gmail.com
                            </h4>
                            <h4>
                                <AiOutlineGlobal /> www.grabbite.com
                            </h4>

                        </div>
                    </div>
                    <div class="col-lg-6 ">
                        <div class="conatctus-form my-3">
                            <form action="">
                                <input type="text" name="" class="contactinput w-100" id="" placeholder="Your Name" />
                                <input type="email" class="contactinput w-100" placeholder="Your Email" />
                                <input type="number" class="contactinput w-100" placeholder="Your Mobile Number" />
                                <textarea name="" id="" cols="30" rows="5" class="contactinput w-100"
                                    placeholder="Message"> </textarea>
                                    <div class="contact-btn d-flex justify-content-end">
                                        <input type="button" value="send" class="contactinput bg-warning border-none" />
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mapin">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54870.465552018446!2d76.72232942697296!3d30.73514871928552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1698407402877!5m2!1sen!2sin"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</>
)
}

export default Contact