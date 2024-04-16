import React, { useState } from 'react'
import pro from '../Img/vectorPro.png'
import Data from './ServiceApi'
import './CSS/Service.css'
const Service = () => {
    const [item, setItem] = useState(Data)
    return (
        <>
            <section className="service-section p-5">
                <div className="container text-center">
                    <h6 className='serve'>  <img src={pro} alt="" className='service-img' />Our Services</h6>
                    <h2 className='offer'>What We <span className='text-white'>Offer</span></h2>
                    <div class="float">
                        {item.map((curElm, index) => {
                            return (
                                <>
                                    <div className="col-lg-4 foodie-sec" key={index} id={curElm.id}>
                                        <div className="foodie">
                                            <img src={curElm.img} alt="" />
                                        </div>
                                        <h4>{curElm.title}</h4>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service