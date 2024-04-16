import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaStar } from 'react-icons/fa';
import SharedData from './SharedData';

const SharedOrder = () => {
    const [activeTab, setActiveTab] = useState('facebook');
    const socialMediaData = SharedData[activeTab];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="shared_order">
            <div className="shared-tab-heading  rounded-3 mb-3">
                <ul className='d-flex justify-content-between w-50 p-2 text-light'>
                    <li onClick={() => handleTabChange('facebook')} className={activeTab === 'facebook' ? 'active fs-5' : 'fs-5'}><FaFacebook className='me-2 fs-5' />FaceBook</li>
                    <li onClick={() => handleTabChange('instagram')} className={activeTab === 'instagram' ? 'active fs-5' : 'fs-5'}><FaInstagram className='me-2 fs-5' />Instagram</li>
                    <li onClick={() => handleTabChange('twitter')} className={activeTab === 'twitter' ? 'active fs-5' : 'fs-5'}><FaTwitter className='me-2 fs-5' />Twitter</li>
                    <li onClick={() => handleTabChange('whatsapp')} className={activeTab === 'whatsapp' ? 'active fs-5' : 'fs-5'}><FaWhatsapp className='me-2 fs-5' />Whatsapp</li>
                </ul>
            </div>
            <div className="shared-tab-body">
                <div className="shared-products">
                    <div className="flex_box gap-2">
                        {socialMediaData.map((curElm, index) => (
                            <div className="col-md-3 m-0 col menubar border rounded-4 p-3" id={curElm.id} key={index}>
                                <div className="products-box">
                                    <div className="product-img">
                                        <img src={curElm.img} alt="" className='rounded-3' />
                                    </div>
                                    <div className="product-description mt-3">
                                        <h5 className='fs-5 text-capitalize'>{curElm.product}</h5>
                                        <p>{curElm.description}</p>
                                        <h5 className='fs-6'><span className='text-decoration-line-through text-secondary'>${curElm.price}</span><strong className='ms-2'>${curElm.price2}</strong></h5>
                                        <div className="ratings">
                                            <FaStar className='text-warning fs-4' />
                                            <FaStar className='text-warning fs-4' />
                                            <FaStar className='text-warning fs-4' />
                                            <FaStar className='text-warning fs-4' />
                                            <FaStar className='text-secondary fs-4' />
                                        </div>
                                        <button className="btn btn-primary">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SharedOrder;
