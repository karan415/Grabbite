
import React, { useState } from 'react';
import MenuData from './ManuApi';
import pro from '../Img/vectorPro.png';
const Data = () => {
    const [data, setData] = useState(MenuData);

    return (
        <>
            <section className="custom-menu ">
                <div className="container text-center">
                    <h5> <img src={pro} className='service-img' />Our Menu</h5>
                    <h2>Browse Our <span className='red'>Menu</span></h2>
                    <div className="float">
                        {data.map((elm,index) => (
                            <div id={elm.id} key={index} className="column">
                                <div className='dish-img'><img src={elm.img} className='menu-img' alt="" /></div>
                                <div className="item">
                                    <h3 className="item-heading">{elm.heading}</h3>
                                    <p className="item-description">
                                        {elm.para}
                                    </p>
                                    <a href="#" className="menu-btns">{elm.btn}</a>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Data