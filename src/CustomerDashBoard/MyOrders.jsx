import React, { useState } from 'react'
import OrderData from './MyorderData'
import '../GrabBite/CSS/Myorder.css';
const MyOrders = () => {
    const [data, setData] = useState(OrderData);
    return (
        <>
             <div className="order_S_inner">
                <h5 className='pb-4 text-capitalize'>your orders</h5>
                <div className="order-form col-md-4">
                <form action="">
                    <div className="input-group mb-3">
                        <input type="search" className="form-control rounded-2 p-3  border-0" placeholder="search your order" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary rounded-2 p-3  ms-3 text-capitalize bg-white text-black fw-medium border-0" type="button">most recent</button>
                        </div>
                    </div>
                </form>
                </div>
                <div className="row gap-3">
                {
                    data.map((curElm, index) => {
                        return (
                            <>
                                <div className="product_box mb-4 col-md-6" key={index} id={curElm.id}>
                                    <div className="top_element py-2">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col dish_name">
                                                <h5 className='fs-5 fs-md-6'>{curElm.dish}</h5>
                                            </div>
                                            <div className="col view_more text-end">
                                                <span className="text-end blue fw-bold">{curElm.view_btn}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom_elements">
                                        <div className="flex_box d-flex justify-content-between align-items-start p-3 ">
                                            <div className="col_25  col-md-3">
                                                <div className="element_img">
                                                    <img src={curElm.product_img} alt="" />
                                                </div>
                                            </div>
                                            <div className="col_50  col-md-6">
                                                <div className="description_of_dish">
                                                    <h5>{curElm.deliver_date}</h5>
                                                    <h6>{curElm.product_des} <span className="blue fw-bold"> {curElm.reciept}</span></h6>
                                                    <h5>{curElm.rate}</h5>
                                                    <div className="ratings_star">
                                                        <img src={curElm.rating_img} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col_25 col-md-3">
                                                <div className="reorder_btn">
                                                    <button className="btn btn-primary">{curElm.order_btn}</button>
                                                    <button className="btn btn-primary">{curElm.more_btn}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                </div>

            </div>
        </>
    )
}

export default MyOrders