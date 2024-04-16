import React, { useState } from 'react';
import MenuData from './ManuApi.jsx';
import pro from '../Img/vectorPro.png'
import './CSS/Menu.css';

const Menu = () => {
    const [data, setData] = useState(MenuData);

    return (
        <>
            <section className="custom-menu products-data py-5">
                <div className="container text-center">
                    <h6> <img src={pro} className='service-img' alt=''/>Our Menu</h6>
                    <h2>Browse Our <span className='red'>Menu</span></h2>
                    <div className="flex_box">
                        {data.map((elm,index) => (
                            <div id={elm.id} key={index} className="col menubar  colflex">
                                <div className='dish-img'><img src={elm.img} className='menu-img' alt="" /></div>
                                <div className="card-bx">
                                    <h5>{elm.heading}</h5>
                                    <p>
                                        {elm.para}
                                    </p>
                                    <button className="btn_primary">browse now</button>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;
